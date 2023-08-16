import React, { forwardRef } from "react";
import HorizontalLine from "../../components/decorations/HorizontalLine/HorizontalLine";
import MakeBouquet from "../../components/MakeBouquet/MakeBouquet";
import style from "./Make.module.scss";

const Buy = forwardRef<any>((props, ref) => (
  <div className={style.container} ref={ref}>
    <HorizontalLine cn={style.line} />
    <p className={style.title}>Не нашли подходящего букета?</p>
    <p className={style.subtitle}>
      Введите свои контактные данные, и мы свяжемся с Вами в ближайшее время,
      чтобы помочь подобрать желаемую композицию
    </p>
    <MakeBouquet />
    <HorizontalLine cn={style.line} />
  </div>
));

export default Buy;
