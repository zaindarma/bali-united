import Button from "@/components/atoms/Button";
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
          <div className="flex flex-col w-[500px]">
            <div className="flex flex-col justify-center pt-10 pb-5">
              <div className="flex flex-col pb-10">
                <label for="email" className="font-bold">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border p-2 rounded-lg font-thin h-14 text-sm"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label for="password" className="font-bold">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="password"
                  name="password"
                  className="border p-2 rounded-lg font-thin h-14 text-sm"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div>
                <input type="checkbox" id="checkbox" name="checkbox" />
                <label for="checkbox" className="font-thin text-sm pl-1">
                  Keep me signing in
                </label>
              </div>
              <div>
                <a href="#" className="text-red-800 font-thin text-sm">
                  Forgot Your Password?
                </a>
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

            <div className="flex items-center py-10">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="font-thin text-sm px-5">Or Sign in With</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            <button className="w-full rounded-lg bg-white text-black border text-lg font-bold items-center flex justify-center h-14">
              <Image
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="Google logo"
                className="w-10 h-10"
                width={100}
                height={100}
              />
              Sign in with google
            </button>

            <div className="flex justify-center pt-10">
              <p className="font-thin text-sm">
                Dont have an account?{" "}
                <a href="#" className="text-red-800 underline">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LoginPage;
