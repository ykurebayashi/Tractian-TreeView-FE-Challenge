import { useContext } from "react";
import { FlexRow, Text, FlexContainer, FilterButtons } from "./style";
import { MyContext } from "../../../../globals/context";
import BoltIcon from "../../../../assets/bolt-icon.svg";
import InfoIcon from "../../../../assets/info-icon.svg";
import { CustomColors } from "../../../../globals/customStyle";

export const InfoHeader = () => {
  const context = useContext(MyContext);

  return (
    <FlexRow>
      <FlexContainer>
        <Text $fontSize={22} $fontWeight={600}>
          Ativos
        </Text>
        <Text style={{ color: "#77818C" }} $fontSize={14}>
          / {context?.location?.name} Unit
        </Text>
      </FlexContainer>
      <FlexContainer>
        <FilterButtons>
          <BoltIcon />
          <Text $fontColor={CustomColors.grey.dark} $fontWeight={600}>
            Sensor de Energia
          </Text>
        </FilterButtons>
        <FilterButtons>
          <InfoIcon />
          <Text $fontColor={CustomColors.grey.dark} $fontWeight={600}>
            Crítico
          </Text>
        </FilterButtons>
      </FlexContainer>
    </FlexRow>
  );
};
