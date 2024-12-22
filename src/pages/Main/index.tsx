import { Header } from "../../components/Header";
import { useGetCompanies } from "../../query/useGetCompanies";
import { useContext } from "react";
import { MyContext } from "../../globals/context";
import { InfoPannel } from "../../components/Info";
import { MainContainer, MainBody } from "./style";
import { LoadingSpinner } from "../../components/Loading";

export const Main = () => {
  const companies = useGetCompanies();
  const context = useContext(MyContext);

  const changeCompany = (newCompany: { id: string; name: string }) => {
    context?.setLocation(newCompany);
    if (newCompany !== context?.location) {
      context?.setSelectedAsset(undefined);
    }
  };

  return (
    <MainContainer>
      <LoadingSpinner isLoading={companies.isLoading}>
        <Header
          locations={companies.data || []}
          current={context?.location}
          onClick={changeCompany}
        />
      </LoadingSpinner>
      {context?.location && (
        <MainBody>
          <InfoPannel currentId={context.location.id} filter={context.filter} />
        </MainBody>
      )}
    </MainContainer>
  );
};
