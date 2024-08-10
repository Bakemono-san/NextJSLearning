import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Key } from "react";
import Image from "next/image";

export default function Status({
  id,
  image,
  username,
}: Readonly<{ id: Key; image: string; username: string }>) {
  return (
    <div key={id} className="flex flex-col items-center cursor-pointer w-14 h-14 sm:w-20 sm:h-20">
      <div>
        <Image
          src={image}
          alt="Picture of the author"
          width={250}
          height={250}
          className="!w-14 sm:!w-20 h-14 sm:h-20 rounded-full border-2 border-red-500 p-1"
        />
      </div>
      <p className="text-sm mt-2">{username}</p>
    </div>
  );
}
