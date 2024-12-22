import { useState } from "react";
import { useGetTree } from "../../hooks/useGetTree";
import { LoadingSpinner } from "../Loading";
import { TreeView } from "../TreeView";
import { InfoHeader } from "./components/InfoHeader";
import { InfosContainer, MainContainer, InfoSection, SearchBar } from "./style";
import { useDebounce } from "../../hooks/useDebounce";

export const InfoPannel = ({
  currentId,
  filter,
}: {
  currentId: string;
  filter?: "energy_sensor" | "critical_sensor";
}) => {
  const [search, setSearch] = useState<string>("");
  const actualSearch = useDebounce({ value: search, debounceTime: 500 });
  const tree = useGetTree({
    currentId: currentId,
    search: actualSearch,
    filter: filter,
  });

  return (
    <MainContainer>
      <InfoHeader />
      <InfosContainer>
        <InfoSection $width="35%">
          <LoadingSpinner isLoading={tree.isLoading}>
            <SearchBar
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar ativo ou local"
            />
            <TreeView data={tree.data} />
          </LoadingSpinner>
        </InfoSection>
        <InfoSection $width="65%"></InfoSection>
      </InfosContainer>
    </MainContainer>
  );
};
