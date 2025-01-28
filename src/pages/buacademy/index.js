import Button from "@/components/atoms/Button";
import AboutAcademy from "@/components/organism/AboutAcademy";
import AboutAcademy2 from "@/components/organism/AboutAcademy2";
import AchievementAcademy from "@/components/organism/AchievementAcademy";
import FacilitiesAcademy from "@/components/organism/FacilitiesAcademy";
import Footer from "@/components/organism/Footer";
import JoinAcademy from "@/components/organism/JoinAcademy";
import Navbar from "@/components/organism/Navbar";
import TermsAcademy from "@/components/organism/TermsAcademy";
import VisiMisiAcademy from "@/components/organism/VisiMisiAcademy";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BuAcademy = () => {
  return (
    <>
      <Navbar />
      <section className="w-full h-full flex justify-center text-black">
        <JoinAcademy />
      </section>

      <section className="w-full h-full flex justify-center text-black">
        <TermsAcademy />
      </section>

      <section className="w-full h-full bg-white text-black">
        <AboutAcademy />
      </section>

      <section>
        <AboutAcademy2 />
      </section>

      <section className="w-full h-full flex justify-center text-black">
        <VisiMisiAcademy />
      </section>

      <section className="w-full h-full bg-white">
        <AchievementAcademy />

        <FacilitiesAcademy />
      </section>

      <Footer />
    </>
  );
};

export default BuAcademy;
