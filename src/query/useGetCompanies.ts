import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { QueryKeys } from "./QueryKeys";

type CompanyType = {
  id: string;
  name: string;
}
const fetchCompanies = async () => {
  const { data } = await axios.get("https://fake-api.tractian.com/companies");
  return data as CompanyType[];
};

export const useGetCompanies = () => {
  return useQuery({queryKey: [QueryKeys.GET_COMPANIES], queryFn: fetchCompanies});
};
