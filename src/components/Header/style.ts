import styled from "styled-components";
import { CustomColors } from "../../globals/customStyle";

export const Main = styled.div<{$isMobile?: boolean;}>`
  height: ${props => props.$isMobile ? '120px': '48px'};
  width: 100%;
  background-color: ${CustomColors.blue.dark};
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  flex-direction: ${props => props.$isMobile ? 'column' : 'row'};
`;

export const StyledButton = styled.button<{ $isSelected?: boolean }>`
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 0 10px;
  border: none;
  border-radius: 2px;
  background-color: ${(props) =>
    props.$isSelected ? CustomColors.blue.ligth : CustomColors.blue.medium};
`;

export const Text = styled.p`
  font-size: 12px;
  color: white;
`;

export const Flexrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
