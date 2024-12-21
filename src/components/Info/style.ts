import styled from "styled-components";
import { CustomColors } from "../../globals/customStyle";

export const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 4px;
  border: 1px solid ${CustomColors.grey.medium};
  padding: 16px;
`;

export const InfosContainer = styled.div`
  display: flex; 
  align-ttems: flex-start; 
  gap: 12px; 
  width: 100%; 
  height: 100%; 
`

export const InfoSection = styled.div<{$width?: string}>`
  border: ${`1px solid ${CustomColors.grey.medium}`};
  height: 100%;
  width: ${props => props.$width ?? '100%'};
`