import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function MenuItem({
  title,
  href,
  iconName,
}: Readonly<{
  title: string;
  href: string;
  iconName: IconProp;
}>) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 text-gray-800 hover:text-gray-900 hover:bg-gray-100 px-2 py-3 mb-2 rounded group"
    >
      <FontAwesomeIcon icon={iconName} className="w-6 group-hover:scale-105" />
      <p>{title}</p>
    </Link>
  );
}
