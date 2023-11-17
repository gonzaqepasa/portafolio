import allProjects from "@/Projects/allProjects";
import {
  NavbarContent,
  NavbarItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";
import "@/styles/link-hover.css";
interface Props {}
const ProjectsNav: React.FC<Props> = () => {
  return (
    <>
      {/* Botons Login para modo ventana  */}
      <NavbarContent className="hidden sm:flex" justify="end">
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

          <DropdownMenu className="border w-72 border-neutral-600 rounded-lg bg-neutral-800">
            {allProjects.map((p, i) => (
              <DropdownItem className="" key={`${p.name}${i}`}>
                <Link
                  className={`flex w-56 link-hover-effect before:bg-cyan-500  `}
                  href={`/projects/${p.name}`}
                >
                  {p.name}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </>
  );
};

export default ProjectsNav;
