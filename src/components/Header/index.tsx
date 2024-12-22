import Logo from "../../assets/logo.svg";
import CompanyIcon from "../../assets/company-icon.svg";
import { Main, Flexrow, StyledButton, Text } from "./style";
import { HeaderProps } from "./types";
import { useMobileInfo } from "../../hooks/useMobileInfo";

export const Header = ({ onClick, current, locations }: HeaderProps) => {
  const { isMobile } = useMobileInfo();

  const handleClick = (element: { id: string; name: string }) => {
    onClick?.(element);
  };

  return (
    <Main $isMobile={isMobile}>
      <Logo />
      <Flexrow>
        {locations.map((location) => {
          return (
            <StyledButton
              onClick={() => handleClick(location)}
              $isSelected={location.id === current?.id}
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
