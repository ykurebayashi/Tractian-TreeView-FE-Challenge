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

export const InfosContainer = styled.div<{$isMobile?: boolean}>`
  display: flex; 
  align-items: flex-start; 
  gap: 12px; 
  width: 100%; 
  height: 90%; 
  flex-direction: ${props => props.$isMobile ? 'column': 'row'};
`

export const InfoSection = styled.div<{$width?: string}>`
  border: ${`1px solid ${CustomColors.grey.medium}`};
  height: 80vh;
  width: ${props => props.$width ?? '100%'};
  overflow: scroll;
`

export const SearchBar = styled.input`
  width: 100%;
  height: 45px;
  padding: 4px 12px;
  border: none;
  border-bottom: 1px solid ${CustomColors.grey.light};
  position: sticky;
  top: 0;
`