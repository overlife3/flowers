import React from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { actions } from "../../../redux/reducers/basket";
import Count from "../../Form/Count/Count";
import SvgSelector from "../../SvgSelector/SvgSelector";
import style from "./OrderedBouquet.module.scss";

type Props = {
  id: string;
  image: string;
  name: string;
  count: number;
  price: string;
  cn?: string;
};

function OrderedBouquet({ image, count, name, price, cn, id }: Props) {
  const dispatch = useAppDispatch();

  const onRemove = () => {
    dispatch(actions.removeBouquetOrder(id));
  };

  const onInc = () => {
    dispatch(actions.incCount(id));
  };
  const onDec = () => {
    dispatch(actions.decCount(id));
  };
  return (
    <div className={style.container + (cn ? " " + cn : "")}>
      <div className={style.image}>
        <img src={image} alt="photo" />
      </div>
      <p className={style.name}>{name}</p>
      <Count initialValue={count} maxValue={5} onInc={onInc} onDec={onDec} />
      <p className={style.price}>{price} р.</p>
      <div className={style.cross} onClick={onRemove}>
        <SvgSelector name="cross" cn={style.svg_cross} />
      </div>
    </div>
  );
}

export default OrderedBouquet;
