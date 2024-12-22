import { useGetTree } from "../../hooks/useGetTree";
import { LoadingSpinner } from "../Loading";
import { TreeView } from "../TreeView";
import { InfoHeader } from "./components/InfoHeader";
import { InfosContainer, MainContainer, InfoSection } from "./style";

export const InfoPannel = ({ currentId }: { currentId: string }) => {
  const tree = useGetTree({ currentId });

  return (
    <MainContainer>
      <InfoHeader />
      <InfosContainer>
        <InfoSection $width="35%">
          <LoadingSpinner isLoading={tree.isLoading}>
            <TreeView data={tree.data} />
          </LoadingSpinner>
        </InfoSection>
        <InfoSection $width="65%"></InfoSection>
      </InfosContainer>
    </MainContainer>
  );
};
