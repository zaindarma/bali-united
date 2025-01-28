import Button from "@/components/atoms/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const JoinAcademy = () => {
  return (
    <div>
      <div className="relative">
        <Image
          className="w-[1280px] h-[480px]"
          src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/buacademy/home_banner.png"
          alt=""
          width={1280}
          height={1280}
        />
        <div className="absolute bottom-0 pl-[100px] flex flex-col gap-5 pb-5">
          <p className="font-thin text-3xl">
            We are opening our academy to the public
          </p>
          <h1 className="font-bold text-4xl">
            Be A Part Of Bali United Academy
          </h1>
          <p className="font-thin text-3xl">Open For Boys And Girls,</p>
          <p className="font-thin text-3xl">Start From Under-8 Age Group</p>
          <Link
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSf7DjxQ_hkoUsEqtWjE9P99u9mJW3MEhTprHR-ju7mmnB_Uwg/viewform"
            }
            target="_blank"
          >
            <Button
              buttonClassname={"text-white rounded-lg font-thin text-lg"}
              title={"Join Us"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinAcademy;
