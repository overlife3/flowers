import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../hooks/useAppSelector";
import PopupOrder from "../../Order/Order";
import SvgSelector from "../../SvgSelector/SvgSelector";
import style from "./Basket.module.scss";
type Props = {};

function Basket({}: Props) {
  const bouquetsOrder = useAppSelector((store) => store.basket.bouquets_order);
  const navigate = useNavigate();
  let count = Object.keys(bouquetsOrder).length;
  const handleClick = () => {
    navigate("/basket");
  };

  return (
    <>
      <div className={style.basket} onClick={handleClick}>
        <SvgSelector name="basket" />
        {count !== 0 && <span className={style.order_count}>{count}</span>}
      </div>
    </>
  );
}

export default Basket;
