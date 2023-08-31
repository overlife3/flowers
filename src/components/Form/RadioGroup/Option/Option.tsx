import classNames from "classnames";
import React from "react";
import { RadioOptionType } from "../../../../types/types";
import style from "./Option.module.scss";

type Props = {
  value: RadioOptionType["value"];
  title: RadioOptionType["title"];
  selected: RadioOptionType["value"];
  groupName: string;
  onChange?: (value: string) => void;
};

function Option(props: Props) {
  const { value, title, selected, groupName, onChange } = props;

  const handleChange = () => onChange?.(value);
  const inputId = "_" + value + "_" + groupName;

  const isChecked = value === selected;

  const optionCn = classNames(style.option, {
    [style.checked]: isChecked,
  });
  return (
    <div className={optionCn} key={value}>
      <div className={style.container}>
        <input
          type="radio"
          className={style.input}
          name={groupName}
          id={inputId}
          onChange={handleChange}
        />
        <span className={style.circle}></span>
      </div>
      <label className={style.label} htmlFor={inputId}>
        {title}
      </label>
    </div>
  );
}

export default Option;
