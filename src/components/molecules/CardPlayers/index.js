import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardPlayers = ({ gambar, title }) => {
  return (
    <div className="h-[360px] w-[236px] bg-red-100 flex">
      <Link href={"#"} className="relative">
        <Image
          className="h-full w-full object-cover"
          src={gambar}
          alt=""
          width={100}
          height={100}
        />
        <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-white font-semibold text-sm z-10">
          {title}
        </div>
      </Link>
    </div>
  );
};

export default CardPlayers;
