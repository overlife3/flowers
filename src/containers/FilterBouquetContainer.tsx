import React, { useEffect, useState } from "react";
import FilterBouquet from "../components/FilterBouquet/FilterBouquet";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { actions } from "../redux/reducers/catalog";

function FilterBouquetContainer() {
  const dispatch = useAppDispatch();
  const { types, bouquets } = useAppSelector((store) => store.bouquets);
  const [price, setPrice] = useState({
    lowerPriceDefault: 0,
    upperPriceDefault: 0,
  });
  const newBouquets = [...bouquets];

  useEffect(() => {
    if (newBouquets.length > 1) {
      const bouquetSorted = newBouquets.sort((a, b) => {
        const num1 = Number(a.price);
        const num2 = Number(b.price);
        if (num1 > num2) return 1;
        if (num1 < num2) return -1;
        return 0;
      });

      setPrice({
        lowerPriceDefault: Number(bouquetSorted[0].price),
        upperPriceDefault: Number(
          bouquetSorted[bouquetSorted.length - 1].price
        ),
      });
    }
  }, [newBouquets.length]);

  return (
    <FilterBouquet
      types={types}
      lowerPriceDefault={price.lowerPriceDefault}
      upperPriceDefault={price.upperPriceDefault}
      onSubmit={(data) => {
        dispatch(
          actions.setFilterParams({
            type: data.type?.value || "",
            name: data.name,
            lower_price: data.lower_price,
            upper_price: data.upper_price,
          })
        );
      }}
    />
  );
}

export default FilterBouquetContainer;
