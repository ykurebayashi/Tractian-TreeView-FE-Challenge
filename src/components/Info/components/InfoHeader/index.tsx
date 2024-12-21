import styled from "styled-components";

export const InfoHeader = () => {
  return (
    <FlexRow>
      <p>Ativos</p>
      <p>passivos</p>
    </FlexRow>
  );
};

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
