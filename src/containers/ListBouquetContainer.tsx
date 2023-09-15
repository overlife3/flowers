import React, { useEffect, useState } from "react";
import ListBouquet from "../components/ListBouquet/ListBouquet";
import Loader from "../components/Loader/Loader";
import { filterBouquetList } from "../helpers/filterBouquetList";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { cardBouquetArr } from "../MOCK/MOCK";
import { actions } from "../redux/reducers/catalog";
import { Bouquet, FilterParams } from "../types/types";

const ListBouquetContainer = () => {
  const dispatch = useAppDispatch();
  const bouquets = useAppSelector((store) => store.bouquets.bouquets);
  const { lower_price, max_length, name, type, upper_price, isLoading } =
    useAppSelector((store) => store.catalog);
  const [listFiltered, setListFiltered] = useState<Bouquet[]>([]);
  useEffect(() => {
    setListFiltered(bouquets);
  }, [bouquets.length]);

  useEffect(() => {
    const filterParams: FilterParams = {
      lower_price: lower_price,
      upper_price: upper_price,
      name: name,
      type: type,
    };
    setListFiltered(filterBouquetList(filterParams, bouquets));
  }, [lower_price, name, type, upper_price]);

  const onLoadMore = () => {
    dispatch(actions.increaseMaxLength());
  };

  if (isLoading) return <Loader />;
  if (bouquets.length === 0)
    return <p style={{ fontSize: "24px" }}>Букетов нет</p>;
  if (listFiltered.length === 0)
    return <p style={{ fontSize: "24px" }}>Таких букетов нет</p>;
  return (
    <ListBouquet
      items={listFiltered.slice(0, max_length)}
      visibleLoadMore={listFiltered.length > max_length}
      onLoadMore={onLoadMore}
    />
  );
};

export default ListBouquetContainer;
