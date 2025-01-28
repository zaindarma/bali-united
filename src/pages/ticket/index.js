import Button from "@/components/atoms/Button";
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
        <div className="w-full flex flex-col items-center pb-12">
          <div className="bg-gray-900 w-[900px] mt-10 py-5">
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-bold pb-3">NEXT MATCH</h2>
              <div className="flex flex-row justify-around gap-4">
                <h2 className="text-3xl font-bold text-center">
                  1 <br />
                  <span className="text-[12px] text-nowrap">DAYS</span>
                </h2>
                <span className="text-3xl font-bold text-center">:</span>
                <h2 className="text-3xl font-bold text-center">
                  19 <br />
                  <span className="text-[12px] text-nowrap">HOURS</span>
                </h2>
                <span className="text-3xl font-bold">:</span>
                <h2 className="text-3xl font-bold text-center">
                  15 <br />
                  <span className="text-[12px] text-nowrap">MINUTES</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="relative py-16 bg-[url('https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/images/bg_ticket.png')] bg-cover text-black w-[900px]">
            <div className="absolute right-[100px] gap-5 items-center top-1/2 -translate-y-1/2 flex flex-col">
              <Link href={"/login"}>
                <Button buttonClassname={"text-white"} title={"Buy Ticket"} />
              </Link>
              <Link
                href="#"
                className="text-red-800 hover:text-blue-800 font-bold"
              >
                Ticket Info
              </Link>
            </div>

            <div className="flex flex-col items-center gap-4">
              <h2 className="font-bold text-sm">
                Stadion Kapten I Wayan Dipta
              </h2>
              <p className="font-thin text-sm">Tuesday 28 Jan 2025</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center flex-col">
                  <Image
                    src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/club/logo_url/2024/Aug/19/66c2c2ad63557/logo-bali-utd-potrait.png"
                    alt=""
                    width={38}
                    height={38}
                  />
                  <h1 className="font-bold w-[96px] text-center">
                    BALI UNITED FC
                  </h1>
                </div>
                <h1>VS</h1>
                <div className="flex items-center flex-col">
                  <Image
                    src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/club/logo_url/2024/Apr/23/662780ad4485f/borneo-fc-samarinda-min-1.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                  <h1 className="font-bold w-[96px] text-center">
                    Borneo FC Samarinda
                  </h1>
                </div>
              </div>
              <p className="font-thin text-sm">Kick-Off time 20:00 WITA</p>
            </div>
          </div>
        </div>
      </section>
      <Sponsor />
      <MediaPartner />
      <Footer />
    </>
  );
};

export default Ticket;
