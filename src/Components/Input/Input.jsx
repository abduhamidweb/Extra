import React from "react";
import "./style.scss";
const Input = ({ type, text, id, inputClass, plece, val, setValue }) => {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input
        type={type}
        id={id}
        autoComplete="off"
        className={inputClass}
        placeholder={plece}
        value={val}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </>
  );


}

export default Input;
