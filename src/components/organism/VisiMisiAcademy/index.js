import Image from "next/image";
import React from "react";

const VisiMisiAcademy = () => {
  return (
    <div className="relative">
      <Image
        className="w-[1280px] h-[450px]"
        src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/buacademy/visi_misi_banner.png"
        alt=""
        width={1280}
        height={1280}
      />
      <div className="absolute top-0 pl-[100px] pt-[80px] flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h1 className="text-black font-bold text-3xl">Vision</h1>
          <p className="lg:w-[360px] pt-3 font-thin">
            To bring a next level of standard in football development for youth
            to become professional players.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-black font-bold text-3xl">Mission</h1>
          <p className="lg:w-[360px] pt-3 font-thin">
            To become a football academy that can bring Indonesia talented youth
            to the world level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisiMisiAcademy;
