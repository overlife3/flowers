import React from "react";
import { Bouquet, CardBouquet } from "../../types/types";
import Card from "../Card/CardBouquet/CardBouquet";
import style from "./ListBouquet.module.scss";
type Props = {
  items: Bouquet[];
  visibleLoadMore: boolean;
  onLoadMore: () => void;
};

function List({ items, visibleLoadMore, onLoadMore }: Props) {
  return (
    <div className={style.container}>
      <div className={style.list}>
        {items.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      {visibleLoadMore && (
        <p className={style.more}>
          <button onClick={onLoadMore}>Больше</button>
        </p>
      )}
    </div>
  );
}

export default List;
