import styled from "styled-components";

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Text = styled.p<{ $fontSize?: number; $fontWeight?: number }>`
  font-size: ${(props) => props.$fontSize ?? 12}px;
  font-weight: ${(props) => props.$fontWeight ?? 400};
`;

export const NamingContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 5px;
  `