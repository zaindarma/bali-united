import Image from "next/image";
import React from "react";

const CardLeague = ({
  gambar1,
  tim1,
  p1,
  gd1,
  pts1,
  gambar2,
  tim2,
  p2,
  gd2,
  pts2,
  gambar3,
  tim3,
  p3,
  gd3,
  pts3,
  gambar4,
  tim4,
  p4,
  gd4,
  pts4,
  gambar5,
  tim5,
  p5,
  gd5,
  pts5,
}) => {
  return (
    <>
      <div className="bg-gray-50 w-[335px] h-auto text-black px-6">
        <h2 className="font-bold py-4">STANDINGS BRI LIGA 1 2024/2025</h2>
        <table className="text-[14px] font-thin text-black">
          <thead>
            <tr className="font-thin">
              <td className="px-3 py-3">#</td>
              <td className="px-3 py-3">TEAM</td>
              <td className="px-3 py-3">P</td>
              <td className="px-3 py-3">GD</td>
              <td className="px-3 py-3">Pts</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-3 text-red-800 font-bold">1</td>
              <td className="px-3 py-3">
                <div className="flex flex-row  items-center">
                  <div className="size-4">
                    <Image src={gambar1} alt="" width={100} height={100} />
                  </div>
                  <div className="font-thin">
                    <p>{tim1}</p>
                  </div>
                </div>
              </td>
              <td className="px-3 py-3">{p1}</td>
              <td className="px-3 py-3">{gd1}</td>
              <td className="px-3 py-3">{pts1}</td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-red-800 font-bold">2</td>
              <td className="px-3 py-3">
                <div className="flex flex-row items-center">
                  <div className="size-6">
                    <Image src={gambar2} alt="" width={100} height={100} />
                  </div>
                  <div className="font-thin">
                    <p>{tim2}</p>
                  </div>
                </div>
              </td>
              <td className="px-3 py-3">{p2}</td>
              <td className="px-3 py-3">{gd2}</td>
              <td className="px-3 py-3">{pts2}</td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-red-800 font-bold">3</td>
              <td className="px-3 py-3">
                <div className="flex flex-row  items-center">
                  <div className="size-4">
                    <Image src={gambar3} alt="" width={100} height={100} />
                  </div>
                  <div className="font-thin">
                    <p>{tim3}</p>
                  </div>
                </div>
              </td>
              <td className="px-3 py-3">{p3}</td>
              <td className="px-3 py-3">{gd3}</td>
              <td className="px-3 py-3">{pts3}</td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-red-800 font-bold">4</td>
              <td className="px-3 py-3">
                <div className="flex flex-row  items-center">
                  <div className="size-4">
                    <Image src={gambar4} alt="" width={100} height={100} />
                  </div>
                  <div className="font-thin">
                    <p>{tim4}</p>
                  </div>
                </div>
              </td>
              <td className="px-3 py-3">{p4}</td>
              <td className="px-3 py-3">{gd4}</td>
              <td className="px-3 py-3">{pts4}</td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-red-800 font-bold">5</td>
              <td className="px-3 py-3">
                <div className="flex flex-row  items-center">
                  <div className="size-5">
                    <Image src={gambar5} alt="" width={100} height={100} />
                  </div>
                  <div className="font-thin">
                    <p className="font-bold text-red-800">{tim5}</p>
                  </div>
                </div>
              </td>
              <td className="px-3 py-3 font-bold text-red-800">{p5}</td>
              <td className="px-3 py-3 font-bold text-red-800">{gd5}</td>
              <td className="px-3 py-3 font-bold text-red-800">{pts5}</td>
            </tr>
          </tbody>
        </table>
        <a
          href="#"
          className="text-red-800 hover:text-blue-700 font-thin underline flex justify-center py-6"
        >
          See the standings
        </a>
      </div>
    </>
  );
};

export default CardLeague;
