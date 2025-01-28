import Link from "next/link";
import React from "react";

const Header = ({ title, src, src2 }) => {
  return (
    <div className="w-full bg-gray-100 text-black font-thin text-sm h-12 flex items-center pl-[100px]">
      <Link href={`${src}`}>
        Home /{" "}
        <Link className="text-red-800 font-bold" href={`${src2}`}>
          {title}
        </Link>
      </Link>
    </div>
  );
};

export default Header;
