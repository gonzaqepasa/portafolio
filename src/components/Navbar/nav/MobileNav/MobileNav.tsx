import allProjects from "@/Projects/allProjects";
import { NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Link from "next/link";
import ProjectsLinkNav from "../WindowNav/ProjectsLinkNav";
import { FaBriefcase, FaHome } from "react-icons/fa";

interface Props {}
const MobileNav: React.FC<Props> = () => {
  return (
    <>
      {/* Menu desplegable en mobile  */}
      <NavbarMenu className="bg-neutral-900/5">
        <NavbarMenuItem className="flex items-center gap-2 my-2  text-2xl">
          <FaHome /> <Link href={"/"}>Inicio</Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="flex items-center gap-2 my-2 text-2xl">
          <FaBriefcase /> Proyectos
        </NavbarMenuItem>
        {allProjects.map((item, index) => (
          <NavbarMenuItem className="ml-10 relative" key={`${item}-${index}`}>
            <ProjectsLinkNav p={item} />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </>
  );
};

export default MobileNav;
