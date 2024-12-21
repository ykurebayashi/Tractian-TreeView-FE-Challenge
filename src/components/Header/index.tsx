import Logo from "../../assets/logo.svg";
import CompanyIcon from "../../assets/company-icon.svg";
import { Main, Flexrow, StyledButton, Text } from "./style";

type HeaderProps = {
  onClick?: (param: string) => void;
  current?: string | null;
  locations: { id: string; name: string }[];
};

export const Header = ({ onClick, current, locations }: HeaderProps) => {
  return (
    <Main>
      <Logo />
      <Flexrow>
        {locations.map((location) => {
          return (
            <StyledButton
              onClick={() => onClick?.(location.id)}
              $isSelected={location.id === current}
            >
              <CompanyIcon />
              <Text>{location.name}</Text>
            </StyledButton>
          );
        })}
      </Flexrow>
    </Main>
  );
};
