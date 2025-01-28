import Button from "@/components/atoms/Button";
import InputForm from "@/components/atoms/InputForm";
import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";
import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <Navbar />
      <section className="w-full h-full flex justify-center px-[130px] bg-gray-100">
        <div className="flex flex-col items-center bg-white pb-20 w-[1280px] text-black">
          <h1 className="w-[200px] text-4xl font-bold pt-10 flex justify-center text-center">
            FORGOT PASSWORD
          </h1>
          <h3 className="w-[250px] py-10 flex justify-center text-center font-thin">
            Dont worry. Please insert your email and we will send a recovery
            link.
          </h3>
          <div className="flex flex-col w-[250px] pb-5">
            <InputForm
              forInput={"email"}
              id={"email"}
              label={"Email"}
              name={"email"}
              placeholder={"Email Address"}
              type={"email"}
            />
          </div>
          <Button buttonClassname={"w-[250px] text-white"} title={"SUBMIT"} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ForgotPassword;
