import styled from "styled-components";
import { Header } from "../components/Header";
import { useGetCompanies } from "../query/useGetCompanies";
import { useContext } from "react";
import { MyContext } from "../globals/context";

export const Main = () => {
  const companies = useGetCompanies();
  const context = useContext(MyContext);

  return (
    <MainContainer>
      <Header
        locations={companies.data || []}
        current={context?.location}
        onClick={context?.setLocation}
      />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
