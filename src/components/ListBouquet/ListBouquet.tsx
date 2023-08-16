import React from "react";
import { CardBouquet } from "../../types/types";
import Card from "../Card/CardBouquet/CardBouquet";
import style from "./ListBouquet.module.scss";
type Props = { items: CardBouquet[] };

function List({ items }: Props) {
  return (
    <div className={style.container}>
      <div className={style.list}>
        {items.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <p className={style.more}>
        <button>Больше</button>
      </p>
    </div>
  );
}

export default List;
