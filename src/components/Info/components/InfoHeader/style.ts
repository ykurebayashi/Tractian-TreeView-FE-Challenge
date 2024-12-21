import styled from "styled-components";
import { CustomColors } from "../../../../globals/customStyle";

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
`;

export const Text = styled.p<{ $fontSize?: number; $fontWeight?: number, $fontColor?: string; }>`
  font-size: ${(props) => props.$fontSize ?? 12}px;
  font-weight: ${(props) => props.$fontWeight ?? 400};
  color: ${(props) => props.$fontColor ?? '' };
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 5px;
`;

export const FilterButtons = styled.button<{$isSelected?: boolean;}>`
  background: ${props => props.$isSelected ? CustomColors.blue.ligth : 'none'};
  height: 38px;
  border: 1px solid ${CustomColors.grey.medium};
  border-radius: 3px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 14px;
  cursor: pointer;

  svg > path {
    fill: ${props => props.$isSelected ? 'white' : ''};
  }

  p {
    color: ${props => props.$isSelected ? 'white' : 'none'};
  }
`