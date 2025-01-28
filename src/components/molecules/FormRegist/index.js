import Button from "@/components/atoms/Button";
import Checkbox from "@/components/atoms/Checkbox";
import InputForm from "@/components/atoms/InputForm";
import Image from "next/image";
import React from "react";
import GoogleLogin from "../GoogleLogin";
import Link from "next/link";

const FormRegist = () => {
  return (
    <>
      <div className="flex flex-col w-[500px]">
        <div className="flex flex-col justify-center pt-10 gap-5">
          <div className="flex flex-col">
            <InputForm
              forInput={"name"}
              id={"name"}
              label={"Name"}
              name={"name"}
              placeholder={"First Name"}
              type={"text"}
            />
          </div>
          <div className="flex flex-col">
            <InputForm
              forInput={"username"}
              id={"username"}
              label={"Username"}
              name={"username"}
              placeholder={"Username"}
              type={"text"}
            />
          </div>
          <div className="flex flex-col">
            <InputForm
              forInput={"email"}
              id={"email"}
              label={"E-mail"}
              name={"email"}
              placeholder={"Email Address"}
              type={"text"}
            />
          </div>
          <div className="flex flex-col">
            <InputForm
              forInput={"password"}
              id={"password"}
              label={"Password"}
              name={"password"}
              placeholder={"Password"}
              type={"password"}
            />
          </div>
          <div className="flex flex-col">
            <InputForm
              forInput={"verify"}
              id={"verify"}
              label={"Verify Password"}
              name={"verify"}
              placeholder={"Verify Password"}
              type={"password"}
            />
          </div>
        </div>

        <div className="py-8">
          <Checkbox
            label={
              "By Registered, you agree to Privacy Policy, and Terms of Use."
            }
          />
        </div>

        <Button
          buttonClassname="w-full rounded-lg text-white bg-gray-900"
          title={"SIGN UP"}
        />

        <GoogleLogin />

        <div className="flex justify-center pt-10">
          <p className="font-thin text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-red-800 underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default FormRegist;
