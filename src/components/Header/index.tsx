import Logo from "../../assets/logo.svg";
import CompanyIcon from "../../assets/company-icon.svg";
import { Main, Flexrow, StyledButton, Text } from "./style";

export const Header = () => {
  return (
    <Main>
      <Logo />
      <Flexrow>
        <StyledButton>
          <CompanyIcon />
          <Text>Apex Unit</Text>
        </StyledButton>
        <StyledButton>
          <CompanyIcon />
          <Text>Tobias Unit</Text>
        </StyledButton>
        <StyledButton>
          <CompanyIcon />
          <Text>Jaguar Unit</Text>
        </StyledButton>
      </Flexrow>
    </Main>
  );
};
