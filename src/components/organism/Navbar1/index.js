import FacebookLogo from "@/components/atoms/FacebookLogo";
import InstagramLogo from "@/components/atoms/InstagramLogo";
import TiktokLogo from "@/components/atoms/TiktokLogo";
import TwitterLogo from "@/components/atoms/TwitterLogo";
import YoutubeLogo from "@/components/atoms/YoutubeLogo";
import React from "react";

const Navbar1 = () => {
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
            <a href="">LOGIN</a>
            <a href="">|</a>
            <a href="">REGISTER</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
