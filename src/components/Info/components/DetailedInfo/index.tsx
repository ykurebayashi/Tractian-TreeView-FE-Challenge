import styled, { css } from "styled-components";
import { CustomColors } from "../../../../globals/customStyle";
import { useContext } from "react";
import { MyContext } from "../../../../globals/context";

export const DetailedInfo = () => {
  const myContext = useContext(MyContext);

  return (
    <Column>
      <TitleContainer>
        <AssetTitle>{myContext?.selectedAsset?.name}</AssetTitle>
      </TitleContainer>

      <Column $padding="24px">
        <Column $marginBottom="24px"></Column>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Column $disableBorder>
            <p>Sensor</p> <p>{myContext?.selectedAsset?.sensorId}</p>
          </Column>
          <Column $disableBorder>
            <p>Receptor</p> <p>{myContext?.selectedAsset?.gatewayId}</p>
          </Column>
        </div>
      </Column>
    </Column>
  );
};

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
