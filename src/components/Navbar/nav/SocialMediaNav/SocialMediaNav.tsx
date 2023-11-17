import Image from "next/image";
import { NavbarContent, NavbarItem } from "@nextui-org/react";
import igSvg from "@/utils/images/socialmedia/instagram.svg";
import linkedinSvg from "@/utils/images/socialmedia/linkedin.svg";
import githubSvg from "@/utils/images/socialmedia/github.svg";

interface Props {
  justify: "center" | "end" | "start" | undefined;
  mobile: boolean;
}

const socialMedia = [
  { img: igSvg, url: "https://instagram.com/gonzaqepasa" },
  { img: linkedinSvg, url: "https://www.linkedin.com/in/gonzaqepasa/" },
  { img: githubSvg, url: "https://github.com/gonzaqepasa/" },
];

const SocialMediaNav: React.FC<Props> = ({ justify, mobile }) => {
  return (
    <>
      {/* Menu Nav para modo ventana redes sociales */}
      <NavbarContent
        className={`${!mobile ? "hidden sm:flex" : "flex sm:hidden"} gap-4`}
        justify={justify}
      >
        {socialMedia.map((item, index) => (
          <NavbarItem
            className="hover:scale-110 transition-transform"
            key={index}
          >
            <a target="_blank" href={item.url}>
              <Image src={item.img} alt="Err" />
            </a>
          </NavbarItem>
        ))}
      </NavbarContent>
    </>
  );
};

export default SocialMediaNav;
