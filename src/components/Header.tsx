"use client";

import React from 'react';
import Logo from "../../public/WhiteImage.png"
import Image from 'next/image';
import ThemeToggleButton from './ThemeButton';
import HireMe from './HireMe';

const Header: React.FC = () => {
  return (
    <header className="dark:bg-neutral-950 bg-slate-50 py-2 px-4 flex items-center justify-between">
      {/* Logo and Name */}
      <div className="flex items-center">
        <Image src={Logo} alt="alt" width={64} height={64} />
        <h1 className="text-white yatra-one-regular text-xl font-bold mx-2">Dipanshu Shaw</h1>
      </div>

      {/* Buttons */}
      <div>
        <HireMe/>
        <ThemeToggleButton/>
      </div>
    </header>
  );
};

export default Header;
