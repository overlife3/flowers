import React from "react";
import { bouquetImages } from "../MOCK/MOCK";
import Card from "./Card/CardBouquet/CardBouquet";
import style from "./Test.module.scss";
import SwiperBouquet from "./Swiper/SwiperBouquet/SwiperBouquet";
function Test() {
  return (
    <>
      <SwiperBouquet images={bouquetImages} />
    </>
  );
}

export default Test;
