import styled from "styled-components";
import { CustomColors } from "../../../../globals/customStyle";
import { useContext } from "react";
import { MyContext } from "../../../../globals/context";

export const DetailedInfo = () => {
  const myContext = useContext(MyContext);

  return (
    <Column>
      <TitleContainer>
        <AssetTitle>{myContext?.selectedAsset?.name}</AssetTitle>
        <IconContainer>oi</IconContainer>
      </TitleContainer>
      <p>oi2</p>
    </Column>
  );
};

export const Column = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
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
`;

export const IconContainer = styled.div`
  padding-left: 13px;
  svg {
    width: 22px;
    height: 22px;
  }
`;
