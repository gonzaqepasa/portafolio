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
      <Navbar
        maxWidth="full"
        isBlurred
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-neutral-900/50 "
      >
        <SocialMediaNav justify="start" mobile={false} />
        <HamburguerNav isMenuOpen={isMenuOpen} />
        <WindowNav />
        <SocialMediaNav justify="end" mobile={true} />
        <MobileNav />
      </Navbar>
    </>
  );
}

export default NavbarMain;
