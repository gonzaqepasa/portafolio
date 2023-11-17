"use client";
import { useState, useEffect } from "react";
import { Navbar } from "@nextui-org/react";
import SocialMediaNav from "./nav/SocialMediaNav/SocialMediaNav";
import HamburguerNav from "./nav/HamburguerNav/HamburguerNav";
import MobileNav from "./nav/MobileNav/MobileNav";
import WindowNav from "./nav/WindowNav/WindowNav";

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
      <Navbar isBlurred className="bg-neutral-900/50 " onMenuOpenChange={setIsMenuOpen}>
        <SocialMediaNav />
        <HamburguerNav isMenuOpen={isMenuOpen} />
        <WindowNav />
        <MobileNav />
      </Navbar>
    </>
  );
}

export default NavbarMain;
