import Card from "@/components/molecules/Card";
import CardAds from "@/components/molecules/CardAds";
import CardBig from "@/components/molecules/CardBig";
import CardLeague from "@/components/molecules/CardLeague";
import CardMedia from "@/components/molecules/CardMedia";
import CardNext from "@/components/molecules/CardNext";
import CardPhoto from "@/components/molecules/CardPhoto";
import CardPlayers from "@/components/molecules/CardPlayers";
import CardPrevious from "@/components/molecules/CardPrevious";
import CardYoutube from "@/components/molecules/CardYoutube";
import MediaPartner from "@/components/molecules/MediaPartner";
import Sponsor from "@/components/molecules/Sponsor";
import TitlePhotos from "@/components/molecules/TitlePhotos";
import TitlePlayer from "@/components/molecules/TitlePlayers";
import TitleSection from "@/components/molecules/TitleSection";
import TitleVideos from "@/components/molecules/TitleVideos";
import CardMatch from "@/components/molecules/CardMatch";
import Navbar1 from "@/components/organism/Navbar1";
import Navbar2 from "@/components/organism/Navbar2";
import News from "@/components/organism/News";
import Players from "@/components/organism/Players";
import Image from "next/image";
import React from "react";
import Navbar from "@/components/organism/Navbar";
import Footer from "@/components/organism/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <section className="w-full h-full flex justify-center">
        <Image
          src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/banner/image/2024/Aug/08/66b480f14d548/banner-website-bufc.png"
          alt=""
          width={1280}
          height={720}
        />
      </section>

      <section className="bg-gray-200 mt-[-124px]" id="card">
        <CardMatch />
      </section>

      <section className="bg-gray-200 pt-1" id="news">
        <News />
      </section>

      <section className="bg-gray-950" id="media">
        <TitlePhotos />

        <CardMedia />

        <TitleVideos />

        <CardYoutube />
      </section>

      <section className="bg-gray-100">
        <TitlePlayer />

        <Players />
      </section>

      <section className="bg-white pb-20">
        {/* <!-- SPONSOR --> */}
        <Sponsor />

        <MediaPartner />
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
