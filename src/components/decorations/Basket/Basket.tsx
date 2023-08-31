import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopupOrder from "../../Order/Order";
import SvgSelector from "../../SvgSelector/SvgSelector";
import style from "./Basket.module.scss";
type Props = {};

function Basket({}: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/basket");
  };

  return (
    <>
      <div className={style.basket} onClick={handleClick}>
        <SvgSelector name="basket" />
      </div>
    </>
  );
}

export default Basket;
