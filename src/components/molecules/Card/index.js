import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ gambar, title, desc, time }) => {
  return (
    <>
      <Link href={"/blog3"} className="h-auto w-[241px] bg-white">
        <div>
          <Image
            className="h-[180px] w-full object-cover"
            src={gambar}
            alt="gambar"
            width={1280}
            height={1280}
          />
        </div>
        <div className="px-3 py-3">
          <h1 className="font-bold text-2xl text-black">{title}</h1>
          <p className="pt-2 font-thin text-[16px] text-black">{desc}</p>
        </div>
        <div className="px-3 py-3 text-gray-400 font-thin">
          <p>{time}</p>
        </div>
      </Link>
    </>
  );
};

export default Card;
