import React from "react";

const CustomInput = (props) => {
  const { divClassName, type, name, placeholder, className, isRequired } =
    props;
  return (
    <div className={divClassName}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${className}`}
        required={isRequired}
      />
      <label htmlFor="floatingInput">{placeholder}</label>
    </div>
  );
};

export default CustomInput;
