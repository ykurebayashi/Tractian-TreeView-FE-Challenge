import { useGetTree } from "../../hooks/useGetTree";
import { LoadingSpinner } from "../Loading";
import { TreeView } from "../TreeView";
import { NodeType } from "../TreeView/types";
import { InfoHeader } from "./components/InfoHeader";
import { InfosContainer, MainContainer, InfoSection } from "./style";

const MockData: NodeType[] = [
  {
    id: "656733b1664c41001e91d9ed",
    name: "Machinery house",
    type: "location",
    children: [
      {
        id: "656734448eb037001e474a62",
        name: "Fan H12D",
        type: "asset",
        children: [],
      },
      {
        id: "656734968eb037001e474d5a",
        name: "Motors H12D",
        type: "asset",
        children: [
          {
            id: "6567340c1f4664001f29622e",
            name: "Motor H12D- Stage 1",
            type: "component",
            children: [],
          },
          {
            id: "6567340c664c41001e91dceb",
            name: "Motor H12D-Stage 2",
            type: "component",
            children: [],
          },
          {
            id: "656733921f4664001f295e9b",
            name: "Motor H12D-Stage 3",
            type: "component",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "656733611f4664001f295dd0",
    name: "Empty Machine house",
    type: "location",
    children: [],
  },
  {
    id: "65674204664c41001e91ecb4",
    name: "PRODUCTION AREA - RAW MATERIAL",
    type: "location",
    children: [
      {
        id: "656a07b3f2d4a1001e2144bf",
        name: "CHARCOAL STORAGE SECTOR",
        type: "location",
        children: [
          {
            id: "656a07bbf2d4a1001e2144c2",
            name: "CONVEYOR BELT ASSEMBLY",
            type: "asset",
            children: [
              {
                id: "656a07c3f2d4a1001e2144c5",
                name: "MOTOR TC01 COAL UNLOADING AF02",
                type: "asset",
                children: [
                  {
                    id: "656a07cdc50ec9001e84167b",
                    name: "MOTOR RT COAL AF01",
                    type: "component",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "656734821f4664001f296973",
    name: "Fan - External",
    type: "component",
    children: [],
  },
];

export const InfoPannel = ({ currentId }: { currentId: string }) => {
  const tree = useGetTree({ currentId });

  return (
    <MainContainer>
      <InfoHeader />
      <InfosContainer>
        <InfoSection $width="35%">
          <LoadingSpinner isLoading={tree.isLoading}>
            <TreeView data={MockData} />
          </LoadingSpinner>
        </InfoSection>
        <InfoSection $width="65%"></InfoSection>
      </InfosContainer>
    </MainContainer>
  );
};
