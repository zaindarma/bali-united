import React from "react";

const Checkbox = ({ label }) => {
  return (
    <>
      <input type="checkbox" id="checkbox" name="checkbox" />
      <label for="checkbox" className="font-thin text-sm pl-1">
        {label}
      </label>
    </>
  );
};

export default Checkbox;
