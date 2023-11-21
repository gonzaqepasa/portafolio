import Image from "next/image";
import { NavbarContent, NavbarItem } from "@nextui-org/react";
import SocialMediaButton from "@/components/globals/SocialMediaButton";

interface Props {
  justify: "center" | "end" | "start" | undefined;
  mobile: boolean;
}

const SocialMediaNav: React.FC<Props> = ({ justify, mobile }) => {
  return (
    <>
      {/* Menu Nav para modo ventana redes sociales */}
      <NavbarContent
        className={`${!mobile ? "hidden sm:flex" : "flex sm:hidden"} gap-4`}
        justify={justify}
      >
        <NavbarItem className="">
          <SocialMediaButton />
        </NavbarItem>
      </NavbarContent>
    </>
  );
};

export default SocialMediaNav;
