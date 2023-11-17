import allProjects from "@/Projects/allProjects";
import { NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Link from "next/link";
interface Props {}
const MobileNav: React.FC<Props> = () => {
  return (
    <>
      {/* Menu desplegable en mobile  */}
      <NavbarMenu>
        
        {allProjects.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link href={`/projects/${item.name}`}>{item.name}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </>
  );
};

export default MobileNav;
