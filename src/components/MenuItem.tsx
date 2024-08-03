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
      className="flex items-center gap-4 text-gray-500 hover:text-gray-900 hover:bg-gray-500 px-2 py-3 mb-2 rounded"
    >
      <FontAwesomeIcon icon={iconName} className="w-6" />
      <p>{title}</p>
    </Link>
  );
}
