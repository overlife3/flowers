import React, { useEffect, useRef } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import SvgSelector from "../../SvgSelector/SvgSelector";
import style from "./PopupBouquet.module.scss";
import { bouquetImages } from "../../../MOCK/MOCK";
import SwiperBouquet from "../../Swiper/SwiperBouquet/SwiperBouquet";
import PopupWrapper from "../PopupWrapper/PopupWrapper";
type Props = {
  onClose: () => void;
  isOpened: boolean;
};

function PopupBouquet({ onClose, isOpened }: Props) {
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
            <SwiperBouquet images={bouquetImages} />
          </div>
          <div className={style.info}>
            <div className={style.top}>
              <p className={style.title}>title</p>
              <p className={style.description}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente impedit repellat repellendus, quas optio similique
                assumenda eveniet. Quos, incidunt ad?
              </p>
            </div>
            <div className={style.footer}>
              <p className={style.price}>1000 р.</p>
              <button className={style.buy}>Заказать</button>
            </div>
          </div>
        </div>
      </div>
    </PopupWrapper>
  );
}

export default PopupBouquet;
