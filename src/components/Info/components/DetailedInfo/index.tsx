import { useContext } from "react";
import { MyContext } from "../../../../globals/context";
import {
  Column,
  AssetTitle,
  FallbackDiv,
  InfoText,
  Infotitle,
  Row,
  TitleContainer,
} from "./style";
import { useMobileInfo } from "../../../../hooks/useMobileInfo";

export const DetailedInfo = () => {
  const myContext = useContext(MyContext);
  const { isMobile } = useMobileInfo();

  return (
    <>
      {myContext?.selectedAsset ? (
        <Column $disableBorder>
          <TitleContainer>
            <AssetTitle>{myContext?.selectedAsset?.name}</AssetTitle>
          </TitleContainer>

          <Column $padding="24px" $disableBorder>
            <Row style={{ flexDirection: isMobile ? "column" : "row" }}>
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
              <Column $disableBorder $marginBottom={isMobile ? "24px" : "0"}>
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
