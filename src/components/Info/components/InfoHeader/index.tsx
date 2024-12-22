import { useContext } from "react";
import { FlexRow, Text, FlexContainer, FilterButtons } from "./style";
import { MyContext } from "../../../../globals/context";
import BoltIcon from "../../../../assets/bolt-icon.svg";
import InfoIcon from "../../../../assets/info-icon.svg";
import { CustomColors } from "../../../../globals/customStyle";

export const InfoHeader = () => {
  const context = useContext(MyContext);

  const handleUpdateFilter = (filter: "critical_sensor" | "energy_sensor") => {
    if (filter === context?.filter) {
      return context.setFilter(undefined);
    }

    context?.setFilter(filter);
  };

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
        <FilterButtons
          onClick={() => {
            handleUpdateFilter("energy_sensor");
          }}
          $isSelected={context?.filter === "energy_sensor"}
        >
          <BoltIcon />
          <Text $fontColor={CustomColors.grey.dark} $fontWeight={600}>
            Sensor de Energia
          </Text>
        </FilterButtons>
        <FilterButtons
          onClick={() => {
            handleUpdateFilter("critical_sensor");
          }}
          $isSelected={context?.filter === "critical_sensor"}
        >
          <InfoIcon />
          <Text $fontColor={CustomColors.grey.dark} $fontWeight={600}>
            Crítico
          </Text>
        </FilterButtons>
      </FlexContainer>
    </FlexRow>
  );
};
