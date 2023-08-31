import React from "react";
import { useNavigate } from "react-router-dom";
import SvgSelector from "../SvgSelector/SvgSelector";
import style from "./ToBack.module.scss";
type Props = {
  to: string;
};

function ToBack({ to }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };
  return (
    <div className={style.to_back} onClick={handleClick}>
      <SvgSelector name="down" />
      Назад
    </div>
  );
}

export default ToBack;
