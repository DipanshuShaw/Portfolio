"use client";

import React, { useState, useEffect } from "react";
import Logo from "../../public/WhiteImage.png";
import Image from "next/image";
import ThemeToggleButton from "./ThemeButton";
import HireMe from "./HireMe";
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import Link from "next/link";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Check if the page is scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-50 w-full top-0 py-2 px-4 flex items-center justify-between transition-colors duration-300 ${isScrolled ? "bg-opacity-50 bg-black shadow-sm shadow-neutral-800" : "bg-transparent"
        }`}
    >
      {/* Logo and Name */}
      <div className="flex items-center">
        <Image src={Logo} alt="alt" width={64} height={64} />
        <h1 className="text-slate-100 yatra-one-regular px-4 text-3xl font-semibold mx-2">
          Dipanshu Shaw
        </h1>
      </div>

      {/* Buttons */}
      <div>
        <Link href="https://www.linkedin.com/in/dipanshu-shaw/" target="_blank">
          <IconBrandLinkedin stroke={1.5} className="inline h-8 mx-4 w-8" />
        </Link>
        <Link href="https://github.com/DipanshuShaw" target="_blank">
          <IconBrandGithub stroke={1.5} className="inline h-8 mx-4 w-8" />
        </Link>
        <ThemeToggleButton />
        <HireMe />
      </div>
    </header>
  );
};

export default Header;
