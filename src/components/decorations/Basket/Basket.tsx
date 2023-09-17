import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../hooks/useAppSelector";
import PopupWrapper from "../../Modal/PopupWrapper/PopupWrapper";
import PopupOrder from "../../Order/Order";
import SvgSelector from "../../SvgSelector/SvgSelector";
import Order from "../../Order/Order";
import style from "./Basket.module.scss";
import OrderContainer from "../../../containers/OrderContainer";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { actions } from "../../../redux/reducers/basketModal";

type Props = {};

function Basket({}: Props) {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const bouquetsOrder = useAppSelector((store) => store.basket.bouquets_order);
  const isOpened = useAppSelector((store) => store.basketModal.isOpened);
  let count = Object.keys(bouquetsOrder).length;

  const handleClick = () => {
    // dispatch(actions.setIsOpened(true));
    navigate("/basket");
  };

  return (
    <>
      <div className={style.basket} onClick={handleClick}>
        <SvgSelector name="basket" />
        {count !== 0 && <span className={style.order_count}>{count}</span>}
      </div>
      {/* {isOpened && (
        <PopupWrapper
          onClose={() => dispatch(actions.setIsOpened(false))}
          isOpened={isOpened}
        >
          <OrderContainer />
        </PopupWrapper>
      )} */}
    </>
  );
}

export default Basket;
