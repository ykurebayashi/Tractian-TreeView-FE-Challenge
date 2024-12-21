import { useContext } from "react";
import { FlexRow, Text } from "./style";
import { MyContext } from "../../../../globals/context";

export const InfoHeader = () => {
  const context = useContext(MyContext);

  return (
    <FlexRow>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <Text $fontSize={22} $fontWeight={600}>
          Ativos
        </Text>
        <Text style={{ color: "#77818C" }} $fontSize={14}>
          / {context?.location?.name} Unit
        </Text>
      </div>
    </FlexRow>
  );
};
