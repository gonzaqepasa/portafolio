import allProjects from "@/Projects/allProjects";
import {
  NavbarContent,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  NavbarItem,
} from "@nextui-org/react";
import "@/styles/link-hover.css";
import ProjectsLinkNav from "./ProjectsLinkNav";
import Link from "next/link";
interface Props {}
const ProjectsNav: React.FC<Props> = () => {
  return (
    <>
      {/* Botons Login para modo ventana  */}
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <Button
            disableRipple
            className="p-0 bg-transparent transition-transform hover:scale-105  "
            radius="sm"
            variant="light"
          >
            <Link href={"/#welcome"}>Inicio</Link>
          </Button>
        </NavbarItem>
        <Dropdown>
          <DropdownTrigger>
            <Button
              disableRipple
              className="p-0 bg-transparent transition-transform hover:scale-105  "
              radius="sm"
              variant="light"
            >
              Proyectos
            </Button>
          </DropdownTrigger>

          <DropdownMenu
            aria-label="Navigation window "
            className="border w-72 border-neutral-600 rounded-lg bg-neutral-800/95"
          >
            {allProjects.map((p, i) => (
              <DropdownItem
                aria-label="Option Project"
                className="p-0"
                key={`${p.name}${i}`}
              >
                <ProjectsLinkNav p={p} />
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </>
  );
};

export default ProjectsNav;
