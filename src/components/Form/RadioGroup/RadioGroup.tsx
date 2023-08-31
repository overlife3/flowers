import React from "react";
import { RadioOptionType } from "../../../types/types";
import Option from "./Option/Option";
import style from "./RadioGroup.module.scss";
type Props = {
  name: string;
  options: RadioOptionType[];
  selected: RadioOptionType["value"];
  onChange?: (value: string) => void;
};

function RadioGroup(props: Props) {
  const { name, options, selected, onChange } = props;

  const handleChange = (value: string) => onChange?.(value);

  return (
    <div className={style.group}>
      {options.map(({ value, title }) => (
        <Option
          key={value}
          groupName={name}
          title={title}
          value={value}
          onChange={handleChange}
          selected={selected}
        />
      ))}
    </div>
  );
}

export default RadioGroup;
