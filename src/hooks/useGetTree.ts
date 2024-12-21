import { useGetCompanyAssets } from "../query/useGetAssets"
import { useGetCompanyLocations } from "../query/useGetLocations";

export const useGetTree = ({currentId}: {currentId: string}) => {
    const locations = useGetCompanyLocations({params:{id: currentId}, enabled: !!currentId})
    const assets = useGetCompanyAssets({params:{id: currentId}, enabled: !!currentId});
    console.log(locations.data)
    console.log(assets.data)
    
}