import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import AddBouquetForm from "../../components/Admin/AddBouquet/AddBouquetForm/AddBouquetForm";
import { addBouquet } from "../../firebase/addBouquet";
import { getBouquet } from "../../firebase/getBoququt";
import { setBouquet } from "../../firebase/setBouquet";
import { useAppSelector } from "../../hooks/useAppSelector";

import { typesBouquet } from "../../MOCK/MOCK";
import { Bouquet } from "../../types/types";

function AddBouquetContainer() {
  const { types, bouquets } = useAppSelector((store) => store.bouquets);

  return (
    <>
      <AddBouquetForm
        onSubmit={(data) => {
          const bouquet: Omit<Bouquet, "id"> = {
            name: data.name,
            description: data.description,
            image: "-",
            price: data.price,
            type: data.type.value,
          };
          addBouquet(bouquet);
        }}
        types={types}
        bouquets={bouquets}
      />
    </>
  );
}

export default AddBouquetContainer;
