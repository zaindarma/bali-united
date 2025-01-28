import Button from "@/components/atoms/Button";
import CardTicket from "@/components/molecules/CardTicket";
import MediaPartner from "@/components/molecules/MediaPartner";
import Sponsor from "@/components/molecules/Sponsor";
import Footer from "@/components/organism/Footer";
import Header from "@/components/organism/Header";
import Navbar from "@/components/organism/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Ticket = () => {
  return (
    <>
      <Navbar />
      <Header src={"/home"} src2={"/ticket"} title={"Ticket"} />
      <section className="bg-white">
        <CardTicket />
      </section>
      <Sponsor />
      <MediaPartner />
      <Footer />
    </>
  );
};

export default Ticket;
