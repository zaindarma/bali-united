import Image from "next/image";
import React from "react";

const AboutAcademy2 = () => {
  return (
    <div className="relative">
      <Image
        className="lgw-[1280px] h-[360px]"
        src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/buacademy/intro_banner.png"
        alt=""
        width={1280}
        height={1280}
      />
      <div className="absolute top-0 pl-[100px] pt-[80px] text-white flex flex-col gap-5">
        <h1 className="font-bold text-3xl pb-3">Bali United Academy</h1>
        <p className="font-light lg:w-[400px]">
          Bali-based soccer education managed by professional clubs and the best
          facilities in Bali.
        </p>
        <p className="font-light lg:w-[400px]">
          In planning programming, implementation, supervision and evaluation of
          coaching using sports science and related disciplines.
        </p>
      </div>
    </div>
  );
};

export default AboutAcademy2;
