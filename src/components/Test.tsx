import React, { useState } from "react";
import { bouquetImages } from "../MOCK/MOCK";
import Card from "./Card/CardBouquet/CardBouquet";
import style from "./Test.module.scss";
import SwiperBouquet from "./Swiper/SwiperBouquet/SwiperBouquet";
import PopupOrder from "./Order/Order";
import Count from "./Form/Count/Count";
import BurgerMenu from "./decorations/BurgerMenu/BurgerMenu";
function Test() {
  const [isOpened, setIsOpened] = useState(true);

  const onOpen = () => {
    setIsOpened(true);
  };

  const onClose = () => {
    setIsOpened(false);
  };

  return <></>;
}

export default Test;
