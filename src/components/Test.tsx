import React, { useState } from "react";
import { bouquetImages } from "../MOCK/MOCK";
import Card from "./Card/CardBouquet/CardBouquet";
import style from "./Test.module.scss";
import SwiperBouquet from "./Swiper/SwiperBouquet/SwiperBouquet";
import PopupOrder from "./Order/Order";
import Count from "./Form/Count/Count";
import BurgerMenu from "./decorations/BurgerMenu/BurgerMenu";
import { getImageUrl } from "../firebase/getImageUrl";
function Test() {
  const [image, setImage] = useState<string | null>(null);

  const handleClick = () => {
    getImageUrl("VKLkkon4ow6ST7xD3B5XZ").then(console.log);

    // .then((url: string) => setImage(url));
  };
  return (
    <>
      <button onClick={handleClick}>click</button>
      {image && <img src={image} />}
    </>
  );
}

export default Test;
