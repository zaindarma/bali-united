import React from "react";

const TitleSection = ({ title, titleSectionClassname }) => {
  return (
    <div className="flex flex-row pl-[127px] mt-[80px] gap-5 items-center">
      <h1 className="font-bold text-[20px] text-black">{title}</h1>
      <h2 className="opacity-10 text-black">|</h2>
      <h1 className={`${titleSectionClassname}`}>See More</h1>
    </div>
  );
};

export default TitleSection;
