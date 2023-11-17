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
  const colorVariants: any = {
    cyan: "text-cyan-500 before:bg-cyan-500 ",
    red: "text-red-600 before:bg-red-500 ",
  };
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

          <DropdownMenu
            aria-label="Navigation window "
            className="border w-72 border-neutral-600 rounded-lg bg-neutral-800"
          >
            {allProjects.map((p, i) => (
              <DropdownItem
                aria-label="Option Project"
                className="p-0"
                key={`${p.name}${i}`}
              >
                <Link
                  className={`flex flex-col w-full p-1 rounded transition-colors ${
                    colorVariants[p.colorMain]
                  } link-hover-effect hover:bg-neutral-700  `}
                  href={`/projects/${p.name}`}
                >
                  {p.name}
                  {p.description && (
                    <i className="text-xs text-neutral-400">{p.description}</i>
                  )}
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
