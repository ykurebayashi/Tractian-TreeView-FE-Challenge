import { Header } from "../../components/Header";
import { useGetCompanies } from "../../query/useGetCompanies";
import { useContext } from "react";
import { MyContext } from "../../globals/context";
import { InfoPannel } from "../../components/Info";
import { MainContainer, MainBody } from "./style";

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
      {context?.location && (
        <MainBody>
          <InfoPannel />
        </MainBody>
      )}
    </MainContainer>
  );
};
