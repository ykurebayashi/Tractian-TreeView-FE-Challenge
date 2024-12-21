import styled from "styled-components";
import { CustomColors } from "../../globals/customStyle";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100dvh;
`;

export const MainBody = styled.div`
  background-color: ${CustomColors.grey.light};
  width: 100%;
  height: 100%;
  padding: 8px;
`;