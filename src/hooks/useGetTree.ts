import { useCallback, useMemo } from "react";
import { useGetCompanyAssets } from "../query/useGetAssets"
import { useGetCompanyLocations } from "../query/useGetLocations";
import { NodeType } from "../components/TreeView/types";

type TreeNode = {
  id: string;
  name: string;
  type: "asset" | "location" | "component";
  children: TreeNode[];
};

type Location = {
  id: string;
  name: string;
  parentId?: string | null;
};

type Asset = {
  id: string;
  name: string;
  locationId?: string | null;
  parentId?: string | null;
  sensorType?: string | null;
  status?: string | null;
  gatewayId?: string | null
};

export type FilterType = 'energy_sensor' | 'critical_sensor'

export const useGetTree = ({currentId, search, filter}: {currentId: string, search: string, filter?: FilterType}) => {
  const locations = useGetCompanyLocations({params:{id: currentId}, enabled: !!currentId})
  const assets = useGetCompanyAssets({params:{id: currentId}, enabled: !!currentId});

  const isLoading = useMemo(() => {
      return locations.isLoading || assets.isLoading
  }, [locations, assets])

  const buildTree = (locations: Location[], assets: Asset[], filter?: FilterType): TreeNode[] => {
      const locationMap = new Map<string, TreeNode>(); // usar map pra depois poder acessar os nodes baseado na chave do seu id em vez de ter que ficar procurando no array.
      const assetMap = new Map<string, TreeNode>();
      const rootNodes: TreeNode[] = []; // aqui como vai ser a versão final, não tem problema jogar como array
    

      //TO-DO -> tentar colocar os dois em 1 loop só, dessa forma eu estou passando 2x por cada locations e cada assets
      locations?.forEach((location) => {
        locationMap.set(location.id, {
          ...location,
          id: location.id,
          name: location.name,
          type: "location", // poderia ser sublocation, mas não tem diferença a nível funcional pra gente, já que o parentId que vai determinar
          children: [],
        });
      });
    
      assets?.forEach((asset) => {
        if (!filter) {
          assetMap.set(asset.id, {
            ...asset,
            id: asset.id,
            name: asset.name,
            type: asset.sensorType ? "component" : "asset", // Se tiver sensorType, é 'component', caso contrário é 'asset'
            children: [],
          });
        }

        if (filter === 'energy_sensor' && (asset.sensorType === 'energy' || asset.sensorType === null)) {
          assetMap.set(asset.id, {
            ...asset,
            id: asset.id,
            name: asset.name,
            type: asset.sensorType ? "component" : "asset",
            children: [],
          });
        }
      
        if (filter === 'critical_sensor' && asset.status !== 'operating') {
          assetMap.set(asset.id, {
            ...asset,
            id: asset.id,
            name: asset.name,
            type: asset.sensorType ? "component" : "asset",
            children: [],
          });
        }
      });
      

      // 4 regras:
      // 1)If the item has a sensorType, it means it is a component. If it does not have a location or a parentId, it means he is unliked from any asset or location in the tree.
      // 2)If the item has a sensorType, it means it is a component. If it does have a location or a parentId, it means he has an asset or Location as parent
      // 3) If the item has a parentId and does not have a sensorId, it means he is an asset with another asset as a parent
      // 4) If the item has a location and does not have a sensorId, it means he is an asset with a location as parent, from the location collection
      locations.forEach((location) => {
          if (location.parentId) { // If the Location has a parentId, it means it is a sub location - isos significa que se tem parentId entao eu devo colocar ele sob o children do pai.
            const parent = locationMap.get(location.parentId); // pega o elemento pai: usando o proprio parentId
            const current = locationMap.get(location.id); // pega o proprio elemento
            if (parent && current) { // checagem que esses elementos foram encontrados
              parent.children.push(current); // coloca o atual elemento sob a aba de filho do do elemento pai
            }
          } else { // caso não tenha parentId, ele é um local proprio
            const current = locationMap.get(location.id);  // entao eu pego ele
            if (current) {
              rootNodes.push(current); // e jogo direto no node (é um local e nao um sub local)
            }
          }
      });
      
      assets.forEach((asset) => {
          if (asset.locationId) {
            const parent = locationMap.get(asset.locationId);
            const current = assetMap.get(asset.id);
            if (parent && current) {
              parent.children.push(current);
            }
          } else if (asset.parentId) { 
            const parent = assetMap.get(asset.parentId);
            const current = assetMap.get(asset.id);
            if (parent && current) {
              parent.children.push(current);
            }
          } else { //  If it does not have a location or a parentId, it means he is unliked from any asset or location in the tree - como ele já passou pelo parentId e pelo locationId, eu sei que ele é um asset solto, jogo direto nos roots.
            const current = assetMap.get(asset.id);
            if (current) {
              rootNodes.push(current);
            }
          }
      });
    
      return rootNodes;
  }

  const filterHighlightedNodes = useCallback(
    (nodes: NodeType[], query: string): NodeType[] => {
      const filteredNodes: NodeType[] = [];

      nodes.forEach((node) => {
        const shouldInsert = query.length
          ? node.name.toLowerCase().includes(query.toLowerCase())
          : false;

        const nodeChildrens = node.children
          ? filterHighlightedNodes(node.children, query)
          : [];

        if (shouldInsert || nodeChildrens.length > 0) {
          filteredNodes.push({
            ...node,
            children: nodeChildrens,
          });
        }
      });

      return filteredNodes;
    },
    []
  );
  
  const data = useMemo(() => {
    if(locations.data && assets. data) {
        const result = buildTree(locations.data, assets.data, filter); 
        return result;
    }
    return [];
  },[assets.data, locations.data, filter])

  const usedData = useMemo(() => {
    if (!search) {
      return data;
    }
    return filterHighlightedNodes(data, search);
  }, [filterHighlightedNodes, search, data]);


  return {
    isLoading,
    data: usedData
  }
}