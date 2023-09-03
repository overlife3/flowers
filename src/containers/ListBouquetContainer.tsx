import React from "react";
import ListBouquet from "../components/ListBouquet/ListBouquet";
import { cardBouquetArr } from "../MOCK/MOCK";

const ListBouquetContainer = () => {
  const arr = cardBouquetArr.concat(cardBouquetArr, cardBouquetArr);

  return <ListBouquet items={arr} />;
};

export default ListBouquetContainer;
