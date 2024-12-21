import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { QueryKeys } from "./QueryKeys";


const fetchCompanyLocations = async ({id}:{id: string}) => {
  const { data } = await axios.get(`https://fake-api.tractian.com/companies/${id}/locations`);
  return data;
};

export const useGetCompanyLocations = ({params, enabled}: { params: {id: string,}, enabled: boolean}) => {
  return useQuery({queryKey: [QueryKeys.GET_COMPANY_LOCATION, params.id], queryFn: () => fetchCompanyLocations({id: params.id}),enabled});
};
