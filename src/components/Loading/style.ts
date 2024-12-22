import styled, { keyframes } from "styled-components";
import { CustomColors } from "../../globals/customStyle";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 16px solid ${CustomColors.grey.medium};
  border-radius: 50%;
  border-top: 16px solid ${CustomColors.blue.ligth};
  width: 120px;
  height: 120px;
   -webkit-animation: ${spin} 2s linear infinite;
  animation: ${spin} 2s linear infinite;
`