import React from "react";
import ListBouquet from "../components/ListBouquet/ListBouquet";
import { useAppSelector } from "../hooks/useAppSelector";
import { cardBouquetArr } from "../MOCK/MOCK";

const ListBouquetContainer = () => {
  // const arr = cardBouquetArr.concat(cardBouquetArr, cardBouquetArr);
  const bouquets = useAppSelector((store) => store.bouquets.bouquets);

  return <ListBouquet items={bouquets} />;
};

export default ListBouquetContainer;
