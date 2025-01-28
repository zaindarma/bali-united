import Button from "@/components/atoms/Button";
import FormLogin from "@/components/molecules/FormLogin";
import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";
import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <section className="w-full h-full flex justify-center px-[130px] bg-gray-100">
        <div className="flex flex-col items-center bg-white pb-20 w-[1280px] text-black">
          <h1 className="w-[500px] text-4xl font-bold pt-10 flex justify-center">
            SIGN IN
          </h1>
          <FormLogin />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LoginPage;
