import React from "react";

const CustomInput = (props) => {
  const {
    divClassName,
    type,
    name,
    placeholder,
    className,
    isRequired,
    value,
    onChange,
    onBlur,
  } = props;
  return (
    <div className={divClassName}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${className}`}
        required={isRequired}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor="floatingInput">{placeholder}</label>
    </div>
  );
};

export default CustomInput;
