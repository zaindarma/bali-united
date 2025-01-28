import FacebookLogo from "@/components/atoms/FacebookLogo";
import Input from "@/components/atoms/Input";
import InstagramLogo from "@/components/atoms/InstagramLogo";
import TiktokLogo from "@/components/atoms/TiktokLogo";
import TwitterLogo from "@/components/atoms/TwitterLogo";
import YoutubeLogo from "@/components/atoms/YoutubeLogo";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiShareBoxFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black lg:flex lg:py-6 lg:px-20 lg:justify-end lg:items-center hidden">
        <div className="text-white flex flex-row gap-3">
          <div className="flex gap-7 items-center">
            <a href="https://x.com/BaliUtd" target="_blank">
              <TwitterLogo />
            </a>
            <a href="https://www.instagram.com/baliunitedfc" target="_blank">
              <InstagramLogo />
            </a>
            <a
              href="https://www.facebook.com/OfficialBaliUnited"
              target="_blank"
            >
              <FacebookLogo />
            </a>
            <a
              href="https://www.tiktok.com/@baliunitedfc?_t=8h1TdbGmBNa&_r=1"
              target="_blank"
            >
              <TiktokLogo />
            </a>
            <a
              href="https://www.youtube.com/@officialbaliunited"
              target="_blank"
            >
              <YoutubeLogo />
            </a>
          </div>
          <div className="flex gap-3 px-5 items-center">
            <Link href="/login">LOGIN</Link>
            <p>|</p>
            <Link href="/register">REGISTER</Link>
          </div>
        </div>
      </nav>

      <nav className="bg-[#c41e26] flex py-4 px-[90px] justify-between sticky top-0 z-20">
        <div className="flex flex-row items-center">
          <Image
            className="lg:h-[100px] lg:w-[100px] w-[50px] h-[50px]"
            src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/images/bali_united.png"
            alt="baliunited"
            width={50}
            height={50}
          />
          <div className="flex flex-col">
            <Link className="text-white text-[12px] font-[400px]" href="/home">
              OFFICIAL WEBSITES OF
            </Link>
            <Link className="text-white font-bold text-2xl" href="/home">
              BALI UNITED FC
            </Link>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-end">
            <Input placeholder={"Search Here"} name={"search"} />
          </div>
          <div className="flex flex-row text-white gap-5 text-xs pt-7">
            <div className="flex flex-row items-center gap-1">
              <a
                className="hover:text-black hidden lg:block"
                href="https://basket.baliutd.com/"
                target="_blank"
              >
                BASKETBALL
              </a>
              <RiShareBoxFill />
            </div>
            <Link
              className="hover:text-black hidden lg:block"
              href="/buacademy"
            >
              BU ACADEMY
            </Link>
            <Link className="hover:text-black hidden lg:block" href="/ticket">
              TICKET
            </Link>
            <a className="hidden lg:block" href="">
              NEWS
            </a>
            <a className="hidden lg:block" href="">
              MATCH
            </a>
            <Link className="hover:text-black hidden lg:block" href="/training">
              TRAINING CENTRE
            </Link>
            <a className="hidden lg:block" href="">
              TEAM
            </a>
            <a className="hidden lg:block" href="">
              MEDIA
            </a>
            <a className="hidden lg:block" href="">
              CORPORATE
            </a>
            <box-icon
              name="menu"
              size="md"
              color="white"
              className="block lg:hidden right-0"
            ></box-icon>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
