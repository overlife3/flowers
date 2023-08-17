import React, { useState } from "react";
import { bouquetImages } from "../MOCK/MOCK";
import Card from "./Card/CardBouquet/CardBouquet";
import style from "./Test.module.scss";
import SwiperBouquet from "./Swiper/SwiperBouquet/SwiperBouquet";
import PopupOrder from "./Modal/PopupOrder/PopupOrder";
function Test() {
  const [isOpened, setIsOpened] = useState(true);

  const onOpen = () => {
    setIsOpened(true);
  };

  const onClose = () => {
    setIsOpened(false);
  };

  return (
    <>
      <button onClick={onOpen}>Open</button>
      <PopupOrder onClose={onClose} isOpened={isOpened} />
    </>
  );
}

export default Test;
