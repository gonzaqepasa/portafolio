import allProjects from "@/Projects/allProjects";
import { NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Link from "next/link";
import ProjectsLinkNav from "../WindowNav/ProjectsLinkNav";
interface Props {}
const MobileNav: React.FC<Props> = () => {
  return (
    <>
      {/* Menu desplegable en mobile  */}
      <NavbarMenu className="bg-neutral-900/5">
        <NavbarMenuItem>
          <Link className=" text-xl" href={"/"}>
            Inicio
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="text-xl">Proyectos</NavbarMenuItem>
        {allProjects.map((item, index) => (
          <NavbarMenuItem className="ml-3 relative" key={`${item}-${index}`}>
            <ProjectsLinkNav p={item} />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </>
  );
};

export default MobileNav;
