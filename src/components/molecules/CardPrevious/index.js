import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardPrevious = ({
  title,
  gambar1,
  gambar2,
  tim1,
  skor1,
  tim2,
  skor2,
  stadion,
}) => {
  return (
    <>
      <div className="bg-gray-50 w-[335px] h-auto">
        <h2 className="font-bold py-4 pl-5 text-black">{title}</h2>
        <div className="flex flex-row justify-around items-center px-8 pt-10">
          <div className="flex flex-col justify-center items-center gap-3">
            <Image
              className="w-16"
              src={gambar1}
              alt=""
              width={100}
              height={100}
            />
            <h3 className="font-thin text-black">{tim1}</h3>
            <h3 className="font-bold text-[25px] text-black">{skor1}</h3>
          </div>
          <h3 className="font-bold text-[20px] text-black">VS</h3>
          <div className="flex flex-col justify-center items-center gap-3">
            <Image
              className="w-16"
              src={gambar2}
              alt=""
              width={100}
              height={100}
            />
            <h3 className="font-thin text-black">{tim2}</h3>
            <h3 className="font-bold text-[25px] text-black">{skor2}</h3>
          </div>
        </div>
        <div className="pt-[50px] px-[60px]">
          <h3 className="text-center font-thin text-black">{stadion}</h3>
        </div>
        <div className="py-10 flex justify-center">
          <a href="#" className="text-center font-bold text-red-800">
            Match Report
          </a>
        </div>
      </div>
    </>
  );
};

export default CardPrevious;
