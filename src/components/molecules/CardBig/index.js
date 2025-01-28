import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardBig = ({ gambar, title, desc, time }) => {
  return (
    <>
      <div className="flex mt-[30px] px-4">
        <div className="lg:w-[250px] lg:h-[280px]">
          <Link href="/blog">
            <Image
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              src={gambar}
              alt=""
              width={1280}
              height={1280}
            />
          </Link>
        </div>
        <div className="w-[240px] h-auto bg-white">
          <div className="px-4 py-3 w-[220px]">
            <h1 className="font-bold text-[20px] text-black">{title}</h1>
          </div>
          <div className="px-4 font-thin text-black">
            <p>{desc}</p>
          </div>
          <div className="px-4 pt-14 text-gray-400 font-thin">
            <p>{time}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBig;
