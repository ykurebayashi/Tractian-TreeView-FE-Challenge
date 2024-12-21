import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { QueryKeys } from "./QueryKeys";


const fetchCompanyAssets = async ({id}:{id: string}) => {
  const { data } = await axios.get(`https://fake-api.tractian.com/companies/${id}/assets`);
  return data;
};

export const useGetCompanyAssets = (params: {id: string}) => {
  return useQuery({queryKey: [QueryKeys.GET_COMPANY_ASSETS, params.id], queryFn: () => fetchCompanyAssets({id: params.id})});
};
