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
    const locationMap = new Map<string, TreeNode>(); 
    const assetMap = new Map<string, TreeNode>();
    const rootNodes: TreeNode[] = []; 
  
    locations?.forEach((location) => {
      locationMap.set(location.id, {
        ...location,
        id: location.id,
        name: location.name,
        type: "location", 
        children: [],
      });
    });
  
    assets?.forEach((asset) => {
      if (!filter) {
        assetMap.set(asset.id, {
          ...asset,
          id: asset.id,
          name: asset.name,
          type: asset.sensorType ? "component" : "asset",
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
    
    locations.forEach((location) => {
      const current = locationMap.get(location.id);
        if (location.parentId) { 
          const parent = locationMap.get(location.parentId); 
          if (parent && current) {
            parent.children.push(current);
          }
        } else {
          if (current) {
            rootNodes.push(current); 
          }
        }
    });
    
    assets.forEach((asset) => {
      const current = assetMap.get(asset.id)
        if (asset.locationId) {
          const parent = locationMap.get(asset.locationId);
          if (parent && current) {
            parent.children.push(current);
          }
        } else if (asset.parentId) { 
          const parent = assetMap.get(asset.parentId);
          if (parent && current) {
            parent.children.push(current);
          }
        } else {
          if (current) {
            rootNodes.push(current);
          }
        }
    });
  
    return rootNodes;
  }

  const filterRelevantNodes = useCallback(
    (nodes: NodeType[], query: string): NodeType[] => {
      const filteredNodes: NodeType[] = [];

      nodes.forEach((node) => {
        const shouldInsert = query.length
          ? node.name.toLowerCase().includes(query.toLowerCase())
          : false;

        const nodeChildrens = node.children
          ? filterRelevantNodes(node.children, query)
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
    return filterRelevantNodes(data, search);
  }, [filterRelevantNodes, search, data]);


  return {
    isLoading,
    data: usedData
  }
}