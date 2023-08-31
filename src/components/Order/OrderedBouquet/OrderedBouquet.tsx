import React from "react";
import Count from "../../Form/Count/Count";
import SvgSelector from "../../SvgSelector/SvgSelector";
import style from "./OrderedBouquet.module.scss";

type Props = {
  image: string;
  name: string;
  count: number;
  price: string;
  cn?: string;
};

function OrderedBouquet({ image, count, name, price, cn }: Props) {
  return (
    <div className={style.container + (cn ? " " + cn : "")}>
      <div className={style.image}>
        <img src={image} alt="photo" />
      </div>
      <p className={style.name}>{name}</p>
      <Count initialValue={count} maxValue={5} />
      <p className={style.price}>{price} р.</p>
      <div className={style.cross}>
        <SvgSelector name="cross" />
      </div>
    </div>
  );
}

export default OrderedBouquet;
