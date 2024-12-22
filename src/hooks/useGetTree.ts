import { useMemo } from "react";
import { useGetCompanyAssets } from "../query/useGetAssets"
import { useGetCompanyLocations } from "../query/useGetLocations";

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

export const useGetTree = ({currentId}: {currentId: string}) => {
    const locations = useGetCompanyLocations({params:{id: currentId}, enabled: !!currentId})
    const assets = useGetCompanyAssets({params:{id: currentId}, enabled: !!currentId});

    const isLoading = useMemo(() => {
        return locations.isLoading || assets.isLoading
    }, [locations, assets])

    const buildTree = (locations: Location[], assets: Asset[]): TreeNode[] => {
        const locationMap = new Map<string, TreeNode>(); // usar map pra depois poder acessar os nodes baseado na chave do seu id em vez de ter que ficar procurando no array.
        const assetMap = new Map<string, TreeNode>();
        const rootNodes: TreeNode[] = []; // aqui como vai ser a versão final, não tem problema jogar como array
      
        locations?.forEach((location) => {
          locationMap.set(location.id, {
            id: location.id,
            name: location.name,
            type: "location", // poderia ser sublocation, mas não tem diferença a nível funcional pra gente, já que o parentId que vai determinar
            children: [],
          });
        });
      
        assets?.forEach((asset) => {
          assetMap.set(asset.id, {
            id: asset.id,
            name: asset.name,
            type: asset.sensorType ? "component" : "asset", // If the item has a sensorType, it means it is a component - o ternário vai checar isso
            children: [],
          });
        });
    
        console.log(locationMap)
        console.log(assetMap)
      
        return rootNodes;
    }


    const data = useMemo(() => {
        if(locations.data && assets. data) {
            const result = buildTree(locations.data, assets.data); 
            return result;
        }
        return [];
    },[assets.data, locations.data])

    return {
        isLoading,
        data
    }
}