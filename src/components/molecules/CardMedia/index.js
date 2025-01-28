import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardMedia = () => {
  return (
    <div className="w-[360px] h-auto lg:pl-[127px]">
      <div className="w-[244px] h-[280px] relative">
        <Link href={"#"}>
          <Image
            className="w-full h-full object-cover"
            src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/gallerycategory/image/2024/Apr/03/660d1d3c64292/bufcweb-300x_.jpg?token=00c2725dd516734e5c3747a433707de4"
            alt=""
            width={100}
            height={100}
          />
        </Link>
        <div className="absolute bg-black bg-opacity-80 text-white bottom-0 px-5 py-5 h-1/2">
          <p className="font-thin pb-2">21 January 2025</p>
          <h1 className="font-extrabold text-xl">BALI UNITED VS PERSIJA</h1>
        </div>
      </div>
    </div>
  );
};

export default CardMedia;
