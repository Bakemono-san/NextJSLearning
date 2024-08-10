import React from "react";
import MenuItem from "./MenuItem";
import {
  faAdd,
  faHome,
  faMessage,
  faSearch,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

export default function SideMenu() {
  const links = [
    { title: "Acceuil", href: "/", iconName: faHome },
    { title: "Recherche", href: "/search", iconName: faSearch },
    { title: "Messages", href: "/messages", iconName: faMessage },
    { title: "Creer", href: "/create", iconName: faSquarePlus },
  ];
  return (
    <aside className="h-fit sm:h-screen w-full sm:w-fit px-2 sm:px-4 sm:py-12 bg-white border-t-2 sm:border-r border-gray-00 flex sm:flex-col items-center gap-10 fixed sm:relative bottom-0 overflow-hidden">
      <h1 className="text-2xl text-gray-800 hidden sm:flex">E-tailor</h1>
      <div className="flex sm:flex-col justify-between w-full sm:w-fit">
        {links.map((link,id) => (
          <MenuItem
          key={id}
            title={link.title}
            href={link.href}
            iconName={link.iconName}
          />
        ))}
      </div>
    </aside>
  );
}
