import Logo from "../../assets/logo.svg";
import CompanyIcon from "../../assets/company-icon.svg";
import { Main, Flexrow, StyledButton, Text } from "./style";
import { HeaderProps } from "./types";

export const Header = ({ onClick, current, locations }: HeaderProps) => {
  const handleClick = (id: string) => {
    onClick?.(id);
  };

  return (
    <Main>
      <Logo />
      <Flexrow>
        {locations.map((location) => {
          return (
            <StyledButton
              onClick={() => handleClick(location.id)}
              $isSelected={location.id === current}
            >
              <CompanyIcon />
              <Text>{location.name} Unit</Text>
            </StyledButton>
          );
        })}
      </Flexrow>
    </Main>
  );
};
