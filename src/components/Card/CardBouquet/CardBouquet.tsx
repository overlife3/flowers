import React, { useState } from "react";
import { CardBouquet } from "../../../types/types";
import Popup from "../../Modal/PopupBouquet/PopupBouquet";
import style from "./CardBouquet.module.scss";

type Props = {
  item: CardBouquet;
};

function Card({ item }: Props) {
  const [isOpened, setIsOpened] = useState(false);

  const onClose = () => {
    setIsOpened(false);
    console.log("close");
  };

  const onOpen = () => {
    setIsOpened(true);
    console.log("open");
  };

  return (
    <>
      <div className={style.card}>
        <div className={style.container}>
          <div className={style.image}>
            <img src={item.image} alt="Букет" />
          </div>
          <div className={style.content}>
            <p className={style.title}>{item.name}</p>
            <p className={style.price}>{item.price} р.</p>
            <p className={style.btn}>
              <button onClick={onOpen}>Подробнее</button>
            </p>
          </div>
        </div>
      </div>

      <Popup isOpened={isOpened} onClose={onClose} />
    </>
  );
}

export default Card;
