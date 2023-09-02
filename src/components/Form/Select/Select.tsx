import classnames from "classnames";
import { FC, useRef, useState } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import SvgSelector from "../../SvgSelector/SvgSelector";
import style from "./Select.module.scss";

export interface IOptionSelect {
  id: string;
  value: string;
}

type Props = {
  label?: string;
  options: IOptionSelect[];
  value: IOptionSelect | null;
  placeholder: string;
  cn?: string;
  onChange: (option: IOptionSelect | null) => void;
};

const Select: FC<Props> = ({
  options,
  placeholder,
  value,
  cn,
  onChange,
  label,
}) => {
  const selectRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  useOutsideClick(selectRef, () => {
    setIsOpen(false);
  });

  const selectClassName = classnames(style.select, { [style.open]: isOpen });

  const handleOption = (option: IOptionSelect | null) => {
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className={style.field + " " + cn} ref={selectRef}>
      {label ? <p className={style.field_title}>{label}</p> : null}
      <div className={selectClassName}>
        <div className={style.placeholder} onClick={handleOpen}>
          {value ? value.value : placeholder}
          <SvgSelector name="down" cn={style.svg} />
        </div>
        <div className={style.options_list_container}>
          <ul className={style.options_list}>
            <li className={style.option} onClick={() => handleOption(null)}>
              {placeholder}
            </li>
            {options.map((option) => (
              <li
                className={style.option}
                onClick={() => handleOption(option)}
                key={option.id}
              >
                {option.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Select;
