import React, { useEffect, useRef } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import SvgSelector from "../../SvgSelector/SvgSelector";
import style from "./PopupBouquet.module.scss";
import { bouquetImages } from "../../../MOCK/MOCK";
import SwiperBouquet from "../../Swiper/SwiperBouquet/SwiperBouquet";
type Props = {
  onClose: () => void;
  isOpened: boolean;
};

function Popup({ onClose, isOpened }: Props) {
  const containerRef = useRef(null);

  useOutsideClick(containerRef, onClose);

  if (!isOpened) return null;

  return (
    <div className={style.container}>
      <div className={style.body} ref={containerRef}>
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
    </div>
  );
}

export default Popup;
