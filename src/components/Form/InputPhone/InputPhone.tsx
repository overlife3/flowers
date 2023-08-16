import React from "react";
import PhoneInput from "react-phone-input-2";
import style from "./InputPhone.module.scss";
import "./PhoneInput.css";
type Props = {
  value: string;
  onChange: (value: string) => void;
  cn?: string;
};

function InputPhone({ value, onChange, cn }: Props) {
  return (
    <div className={style.container + " " + (cn || "")}>
      <PhoneInput
        placeholder="+7 (***) ***-**-**"
        country={"ru"}
        value={value}
        onChange={onChange}
        disableDropdown
        inputClass={style.input}
        containerClass={style.input_container}
        buttonClass={style.button}
        searchClass={style.button}
      />
    </div>
  );
}

export default InputPhone;
