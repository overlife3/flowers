import classNames from "classnames";
import React from "react";
import { useNavigate } from "react-router-dom";
import SvgSelector from "../SvgSelector/SvgSelector";
import style from "./ToBack.module.scss";
type Props = {
  to: string;
  cn?: string;
};

function ToBack({ to, cn }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  const toBackCn = classNames(style.to_back, cn);

  return (
    <div className={toBackCn} onClick={handleClick}>
      <SvgSelector name="down" />
      Назад
    </div>
  );
}

export default ToBack;
