import Image from "next/image";
import React from "react";

const GoogleLogin = () => {
  return (
    <>
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
    </>
  );
};

export default GoogleLogin;
