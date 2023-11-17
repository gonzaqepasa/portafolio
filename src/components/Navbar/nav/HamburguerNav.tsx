import { NavbarContent, NavbarMenuToggle } from "@nextui-org/react";

interface Props {
  isMenuOpen: boolean;
}
const HamburguerNav: React.FC<Props> = ({isMenuOpen}) => {
  return (
    <>
      {/* Boton hamburguesa mobile */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
    </>
  );
};

export default HamburguerNav;
