import React from "react";
import SvgSelector from "../../SvgSelector/SvgSelector";
import PopupWrapper from "../PopupWrapper/PopupWrapper";
import style from "./PopupOrder.module.scss";

type Props = {
  onClose: () => void;
  isOpened: boolean;
};

function PopupOrder({ onClose, isOpened }: Props) {
  return (
    <PopupWrapper onClose={onClose} isOpened={isOpened}>
      <div className={style.body}>
        <button className={style.close} onClick={onClose}>
          <SvgSelector name="cross" />
        </button>
        <div className={style.content}>
          <p className={style.title}>Ваш заказ:</p>
        </div>
      </div>
    </PopupWrapper>
  );
}

export default PopupOrder;
