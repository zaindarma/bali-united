import React from "react";

const InputForm = ({ forInput, label, type, id, name, placeholder }) => {
  return (
    <>
      <label for={forInput} className="font-bold">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="border p-2 rounded-lg font-thin h-14 text-sm"
        placeholder={placeholder}
        required
      />
    </>
  );
};

export default InputForm;
