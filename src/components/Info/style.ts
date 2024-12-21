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
