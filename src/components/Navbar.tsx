"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconFileInfo,
  IconFolderCode,
  IconBooks,
  IconFileCertificate,
  IconFileText,
} from "@tabler/icons-react";

export default function Navbar() {
  const links = [
    { title: "Home",type: "scroll", icon: <IconHome />, to: "home" },
    { title: "About",type: "scroll", icon: <IconFileInfo />, to: "about" },
    { title: "Projects",type: "scroll", icon: <IconFolderCode />, to: "projects" },
    { title: "Education",type: "scroll", icon: <IconBooks />, to: "education" },
    { title: "Certificate", type: "link", icon: <IconFileCertificate />, href: "https://drive.google.com/drive/folders/19Mg6wOwx_b5l8QmBMoDY3Fwnw5Kgl8h0?usp=sharing" },
    { title: "Resume", type: "link", icon: <IconFileText />, href: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:b8467ca6-61a7-491e-ac05-91a4a3591562" },
  ];

  return (
    <div className="fixed bottom-8 md:bottom-4 w-full flex justify-center z-50">
      <FloatingDock items={links} />

    </div>
  );
}
