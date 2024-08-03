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
    <aside className="h-screen w-1/6 px-6 py-12 border-r border-white flex flex-col gap-8 fixed">
      <h1 className="text-2xl text-gray-200">E-tailor</h1>
      <div>
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
