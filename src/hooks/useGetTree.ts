import { useMemo } from "react";
import { useGetCompanyAssets } from "../query/useGetAssets"
import { useGetCompanyLocations } from "../query/useGetLocations";

export const useGetTree = ({currentId}: {currentId: string}) => {
    const locations = useGetCompanyLocations({params:{id: currentId}, enabled: !!currentId})
    const assets = useGetCompanyAssets({params:{id: currentId}, enabled: !!currentId});

    const isLoading = useMemo(() => {
        return locations.isLoading || assets.isLoading
    }, [locations, assets])

    return {
        isLoading
    }
}