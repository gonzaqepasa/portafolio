"use client";
import { useState, useEffect } from "react";
import { Navbar } from "@nextui-org/react";
import SocialMediaNav from "./nav/SocialMediaNav/SocialMediaNav";
import HamburguerNav from "./nav/HamburguerNav/HamburguerNav";
import MobileNav from "./nav/MobileNav/MobileNav";
import WindowNav from "./nav/WindowNav/WindowNav";

function NavbarMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        maxWidth="full"
        isBlurred
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-neutral-900/5 "
      >
        <SocialMediaNav justify="start" mobile={false} />
        <HamburguerNav isMenuOpen={isMenuOpen} />
        <WindowNav />
        <SocialMediaNav justify="end" mobile={true} />
        <MobileNav setIsMenuOpen={setIsMenuOpen} />
      </Navbar>
    </>
  );
}

export default NavbarMain;
