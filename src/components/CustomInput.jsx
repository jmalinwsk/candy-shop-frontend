import React from "react";

const CustomInput = (props) => {
  const {
    divClassName,
    type,
    name,
    placeholder,
    className,
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
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor="floatingInput">{placeholder}</label>
    </div>
  );
};

export default CustomInput;
