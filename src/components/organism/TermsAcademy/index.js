import Image from "next/image";
import React from "react";

const TermsAcademy = () => {
  return (
    <div className="relative">
      <Image
        className="w-[1280px] h-[480px]"
        src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/images/training_center/EWEW4348.jpg"
        alt=""
        width={1280}
        height={1280}
      />
      <div className="absolute top-0 pl-[100px] pt-[100px]">
        <h1 className="text-black font-bold text-3xl pb-3">
          Terms & Condition
        </h1>
        <li className="text-sm pl-5">
          Bali United Academy will be open for the U-8 age category
        </li>
        <li className="text-sm pl-5">Classes will start in March 2024.</li>
        <li className="text-sm pl-5">
          Training sessions will be held twice a week.
        </li>
        <li className="text-sm pl-5">
          Each student will receive 2 jerseys for training and 1 football to
          take home.
        </li>
        <li className="text-sm pl-5">
          Registration is open from now until March 2024, get a special
          registration fee of Rp 1.5 million.
        </li>
        <li className="text-sm pl-5">
          Agreeing to a monthly fee of Rp 500,000
        </li>
        <p className="pt-3">*terms & condition apply</p>
      </div>
    </div>
  );
};

export default TermsAcademy;
