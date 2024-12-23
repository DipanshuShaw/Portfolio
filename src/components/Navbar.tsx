import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconCertificate,
  IconFileCv,
  IconBooks,
  IconHome,
  IconFolderCode,
  IconFileInfo

} from "@tabler/icons-react";
// import Image from "next/image";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "About",
      icon: (
        <IconFileInfo className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Projects",
      icon: (
        <IconFolderCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Education",
      icon: (
        <IconBooks className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Resume",
      icon: (
        <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Certificate",
      icon: (
        <IconCertificate className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex md:justify-center w-full ">
      <FloatingDock
        desktopClassName="md:bottom-8 fixed bottom-8 max-md:right-8 z-10"
        items={links}
      />
    </div>
  );
}
