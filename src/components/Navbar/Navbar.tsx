"use client";
import { useState, useEffect } from "react";
import { Navbar } from "@nextui-org/react";
import SocialMediaNav from "./nav/SocialMediaNav";
import HamburguerNav from "./nav/HamburguerNav";
import MobileNav from "./nav/MobileNav";
import ProjectsNav from "./nav/ProjectsNav/ProjectsNav";

function NavbarMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setScrollTop(true) : setScrollTop(false);
    };

    // Agregar el event listener al montar el componente
    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar className="" onMenuOpenChange={setIsMenuOpen}>
        <SocialMediaNav />
        <HamburguerNav isMenuOpen={isMenuOpen} />
        <ProjectsNav />
        <MobileNav />
      </Navbar>
    </>
  );
}

export default NavbarMain;
