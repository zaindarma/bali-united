import React from "react";

const Button = ({ title, buttonClassname }) => {
  return (
    <button
      className={`bg-red-800 rounded font-bold h-[55px] w-[130px] ${buttonClassname}`}
    >
      {title}
    </button>
  );
};

export default Button;
