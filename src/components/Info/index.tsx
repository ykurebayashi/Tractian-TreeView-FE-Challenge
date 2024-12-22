import { useState } from "react";
import { useGetTree } from "../../hooks/useGetTree";
import { LoadingSpinner } from "../Loading";
import { TreeView } from "../TreeView";
import { InfoHeader } from "./components/InfoHeader";
import { InfosContainer, MainContainer, InfoSection } from "./style";

export const InfoPannel = ({ currentId }: { currentId: string }) => {
  const [search, setSearch] = useState<string>("");
  const tree = useGetTree({ currentId: currentId, search: search });

  return (
    <MainContainer>
      <InfoHeader />
      <InfosContainer>
        <InfoSection $width="35%">
          <LoadingSpinner isLoading={tree.isLoading}>
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
            <TreeView data={tree.data} />
          </LoadingSpinner>
        </InfoSection>
        <InfoSection $width="65%"></InfoSection>
      </InfosContainer>
    </MainContainer>
  );
};
