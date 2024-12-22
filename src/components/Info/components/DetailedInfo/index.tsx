import styled, { css } from "styled-components";
import { CustomColors } from "../../../../globals/customStyle";
import { useContext } from "react";
import { MyContext } from "../../../../globals/context";

export const DetailedInfo = () => {
  const myContext = useContext(MyContext);

  return (
    <>
      {myContext?.selectedAsset ? (
        <Column $disableBorder>
          <TitleContainer>
            <AssetTitle>{myContext?.selectedAsset?.name}</AssetTitle>
          </TitleContainer>

          <Column $padding="24px" $disableBorder>
            <Row>
              {/* Placeholder para imagem, pode ser um input de arquivo */}
              <div
                style={{
                  minWidth: "336px",
                  height: "226px",
                  border: "1px dashed #55A6FF",
                  backgroundColor: "#F2F8FF",
                  marginBottom: "24px",
                }}
              />
              <Column $disableBorder>
                <Column style={{ paddingBottom: "24px" }}>
                  <Infotitle>Tipo de equipamento:</Infotitle>
                  <InfoText>Tipo A</InfoText>
                </Column>
                <Column $disableBorder style={{ paddingTop: "24px" }}>
                  <Infotitle>Responsáveis:</Infotitle>
                  <InfoText>Responsável A</InfoText>
                </Column>
              </Column>
            </Row>
            <Row $disableBorder>
              <Column $disableBorder>
                <Infotitle>Sensor</Infotitle>
                <InfoText>{myContext?.selectedAsset?.sensorId}</InfoText>
              </Column>
              <Column $disableBorder>
                <Infotitle>Receptor</Infotitle>
                <InfoText>{myContext?.selectedAsset?.gatewayId}</InfoText>
              </Column>
            </Row>
          </Column>
        </Column>
      ) : (
        <FallbackDiv>
          <p>Selecione um asset para acessar as suas informações</p>
        </FallbackDiv>
      )}
    </>
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
