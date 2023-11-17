import Image from "next/image";
import { NavbarContent, NavbarItem } from "@nextui-org/react";
import igSvg from "@/utils/images/socialmedia/instagram.svg";
import linkedinSvg from "@/utils/images/socialmedia/linkedin.svg";
import githubSvg from "@/utils/images/socialmedia/github.svg";

interface Props {}
const SocialMediaNav: React.FC<Props> = ({}) => {
  return (
    <>
      {/* Menu Nav para modo ventana redes sociales */}
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarItem>
          <a
            className="hover:scale-105 transition-transform"
            target="_blank"
            href="https://instagram.com/gonzaqepasa"
          >
            <Image height={20} src={igSvg} alt="err" />
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            className="hover:scale-105 transition-transform"
            href="https://www.linkedin.com/in/gonzaqepasa/"
            target="_blank"
          >
            <Image height={20} src={linkedinSvg} alt="err" />
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            className="hover:scale-105 transition-transform"
            href="https://github.com/gonzaqepasa/"
            target="_blank"
          >
            <Image height={20} src={githubSvg} alt="err" />
          </a>
        </NavbarItem>
      </NavbarContent>
    </>
  );
};

export default SocialMediaNav;
