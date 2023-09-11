import React, { useEffect, useRef } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import SvgSelector from "../../SvgSelector/SvgSelector";
import style from "./PopupBouquet.module.scss";
import { bouquetImages } from "../../../MOCK/MOCK";
import SwiperBouquet from "../../Swiper/SwiperBouquet/SwiperBouquet";
import PopupWrapper from "../PopupWrapper/PopupWrapper";
import { Bouquet } from "../../../types/types";
import { useAppSelector } from "../../../hooks/useAppSelector";
type Props = {
  item: Bouquet;
  onClose: () => void;
  isOpened: boolean;
};

function PopupBouquet({ onClose, isOpened, item }: Props) {
  const containerRef = useRef(null);

  useOutsideClick(containerRef, onClose);

  if (!isOpened) return null;

  return (
    <PopupWrapper onClose={onClose} isOpened={isOpened}>
      <div className={style.body}>
        <button className={style.close} onClick={onClose}>
          <SvgSelector name="cross" />
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
              <button className={style.buy}>Заказать</button>
            </div>
          </div>
        </div>
      </div>
    </PopupWrapper>
  );
}

export default PopupBouquet;
