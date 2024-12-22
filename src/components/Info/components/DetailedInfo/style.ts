import styled, { css } from "styled-components";
import { CustomColors } from "../../../../globals/customStyle";

export const Column = styled.div<{
    $padding?: string;
    $marginBottom?: string;
    $disableBorder?: boolean;
  }>`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    border-bottom: ${(props) =>
      !props.$disableBorder && `1px solid ${CustomColors.grey.light}`};
    ${({ $padding, $marginBottom }) => css`
      padding: ${$padding};
      margin-bottom: ${$marginBottom};
    `}
  `;
  
  export const Row = styled.div<{
    $disableBorder?: boolean;
  }>`
    display: flex;
    width: 100%;
    margin-bottom: 24px;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    border-bottom: ${(props) =>
      !props.$disableBorder && `1px solid ${CustomColors.grey.light}`};
  `;
  
  export const AssetTitle = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: ${CustomColors.blue.dark};
  `;
  
  export const TitleContainer = styled.div`
    padding: 14px 16px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid ${CustomColors.grey.medium};
    position: sticky;
    top: 0;
    background: rgba(255, 255, 255, 0.61);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
  `;
  
  export const Infotitle = styled.p`
    padding: 8px 0;
    font-size: 16px;
    font-weight: 600;
  `;
  
  export const InfoText = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: ${CustomColors.grey.dark};
  `;
  
  export const FallbackDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  