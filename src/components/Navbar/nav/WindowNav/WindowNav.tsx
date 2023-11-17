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
import { FaBriefcase, FaHome } from "react-icons/fa";

interface Props {}
const WindowNav: React.FC<Props> = () => {
  return (
    <>
      <NavbarContent className="hidden sm:flex gap-1" justify="end">
        {/* Botons de Inicio en ventana */}
        <NavbarItem>
          <Button
            className="py-0 w-full text-neutral-100 "
            radius="md"
            variant="light"
          >
            <Link
              className="flex items-center text-lg gap-2 justify-center w-full  h-full"
              href={"/"}
            >
              <FaHome /> Inicio
            </Link>
          </Button>
        </NavbarItem>

        {/* Botons de Proyectos en ventana */}
        <Dropdown className="p-0">
          <DropdownTrigger>
            <Button
              className="flex items-center text-base text-neutral-100 "
              radius="md"
              variant="light"
            >
              <FaBriefcase /> Proyectos
            </Button>
          </DropdownTrigger>

          <DropdownMenu
            aria-label="Navigation window "
            className="border-2  w-80 border-neutral-600 rounded-lg  bg-neutral-800"
            variant="light"
          >
            {allProjects.map((p, i) => (
              <DropdownItem
                aria-label="Option Project "
                className="p-0  "
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

export default WindowNav;
