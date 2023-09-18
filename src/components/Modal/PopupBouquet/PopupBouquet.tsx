import React, { useEffect, useRef, useState } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import SvgSelector from "../../SvgSelector/SvgSelector";
import style from "./PopupBouquet.module.scss";
import { bouquetImages } from "../../../MOCK/MOCK";
import SwiperBouquet from "../../Swiper/SwiperBouquet/SwiperBouquet";
import PopupWrapper from "../PopupWrapper/PopupWrapper";
import { Bouquet } from "../../../types/types";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { actions } from "../../../redux/reducers/basket";
import { actions as actionsBasketModal } from "../../../redux/reducers/basketModal";
import { useNavigate } from "react-router-dom";
type Props = {
  item: Bouquet;
  onClose: () => void;
  isOpened: boolean;
  buttonDisabled?: boolean;
};

function PopupBouquet({ onClose, isOpened, item, buttonDisabled }: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bouquetOrders = useAppSelector((store) => store.basket.bouquets_order);
  const containerRef = useRef(null);
  let disabledButton: boolean = false;

  useOutsideClick(containerRef, onClose);

  if (item.id in bouquetOrders) disabledButton = true;

  const handleOrder = () => {
    dispatch(actions.addBouquetOrder(item));
    // dispatch(actionsBasketModal.setIsOpened(true));
    navigate("/basket");
  };

  if (!isOpened) return null;

  return (
    <PopupWrapper onClose={onClose} isOpened={isOpened}>
      {/* <div style={{ height: "580px" }}> */}
      <div className={style.body}>
        <button className={style.close} onClick={onClose}>
          <SvgSelector name="cross" cn={style.svg} />
        </button>
        <div className={style.content}>
          <div className={style.images}>
            <SwiperBouquet images={item.image} />
          </div>
          <div className={style.info}>
            <div className={style.top}>
              <p className={style.title}>{item.name}</p>
              <p className={style.description}>{item.description}</p>
            </div>
            <div className={style.footer}>
              <p className={style.price}>{item.price} р.</p>
              <button
                className={style.buy}
                onClick={handleOrder}
                disabled={disabledButton || buttonDisabled}
              >
                Заказать
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </PopupWrapper>
  );
}

export default PopupBouquet;
