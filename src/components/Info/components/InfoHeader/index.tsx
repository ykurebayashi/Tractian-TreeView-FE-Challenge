import { FlexRow, Text } from "./style";

export const InfoHeader = () => {
  return (
    <FlexRow>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "center",
        }}
      >
        <Text $fontSize={22} $fontWeight={600}>
          Ativos
        </Text>
        <Text style={{ color: "#77818C" }} $fontSize={14}>
          / Unit
        </Text>
      </div>
    </FlexRow>
  );
};
