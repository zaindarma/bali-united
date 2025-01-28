import Button from "@/components/atoms/Button";
import Checkbox from "@/components/atoms/Checkbox";
import InputForm from "@/components/atoms/InputForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GoogleLogin from "../GoogleLogin";

const FormLogin = () => {
  return (
    <div className="flex flex-col w-[500px]">
      <div className="flex flex-col justify-center pt-10 pb-5">
        <div className="flex flex-col pb-10">
          <InputForm
            forInput={"email"}
            id={"email"}
            label={"Email Address"}
            name={"email"}
            placeholder={"Email Address"}
            type={"email"}
          />
        </div>
        <div className="flex flex-col">
          <InputForm
            forInput={"password"}
            id={"password"}
            label={"Password"}
            name={"password"}
            placeholder={"Password"}
            type={"Password"}
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div>
          <Checkbox label={"Keep me signing in"} />
        </div>
        <div>
          <Link
            href="/forgotpassword"
            className="text-red-800 font-thin text-sm"
          >
            Forgot Your Password?
          </Link>
        </div>
      </div>
      <div className="flex justify-center py-7">
        <p className="font-thin text-sm">
          By logging in, you agree to Privacy Policy, and Terms of Use.
        </p>
      </div>

      <Button
        buttonClassname="w-full rounded-lg text-white bg-gray-900"
        title={"SIGN IN"}
      />

      <GoogleLogin />

      <div className="flex justify-center pt-10">
        <p className="font-thin text-sm">
          Dont have an account?{" "}
          <Link href="/register" className="text-red-800 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FormLogin;
