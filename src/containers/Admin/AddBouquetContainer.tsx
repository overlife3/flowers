import React from "react";
import AddBouquetForm from "../../components/Admin/AddBouquet/AddBouquetForm/AddBouquetForm";
import { addBouquet } from "../../firebase/addBouquet";
import { addImage } from "../../firebase/addImage";
import { createBouquet } from "../../firebase/createBouquet";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Bouquet } from "../../types/types";

function AddBouquetContainer() {
  const { types, bouquets } = useAppSelector((store) => store.bouquets);
  // сначала нужно дождаться загрузки картинок, и только потом создавать букет
  return (
    <>
      <AddBouquetForm
        onSubmit={(data) => {
          // const bouquet: Omit<Bouquet, "id"> = {
          //   name: data.name,
          //   description: data.description,
          //   image: "-",
          //   price: data.price,
          //   type: data.type.value,
          // };
          // // addBouquet(bouquet);
          // // for (let i)
          // // addImage(data.image)

          createBouquet(data);
        }}
        types={types}
        bouquets={bouquets}
      />
    </>
  );
}

export default AddBouquetContainer;
