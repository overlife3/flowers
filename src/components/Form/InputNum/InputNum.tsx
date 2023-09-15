import React from "react";

type Props = {
  onChange: (value: String) => void;
  value: string;
  placeholder?: string;
};

function InputNum({ onChange, value, placeholder }: Props) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    let inputVal = e.target.value;
    if (inputVal !== "" && !Number(inputVal)) inputVal = "0";
    if (!/^\d+$/.test(inputVal)) {
      inputVal = inputVal.slice(0, -1);
    }
    onChange(inputVal);
  };

  return (
    <input
      type="text"
      placeholder={placeholder || ""}
      onChange={handleChange}
      value={value}
    />
  );
}

export default InputNum;
