import React from "react";
import RemoveBouquetForm from "../../components/Admin/RemoveBouquet/RemoveBouquetForm/RemoveBouquetForm";
import { removeBouquet } from "../../firebase/removeBouquet";
import { useAppSelector } from "../../hooks/useAppSelector";
import { typesBouquet } from "../../MOCK/MOCK";

function RemoveBouquetContainer() {
  const { types, bouquets } = useAppSelector((store) => store.bouquets);

  return (
    <>
      <RemoveBouquetForm
        onSubmit={(data) => {
          // Проверка по ввиду букета, просто формальность
          // Эта проверка нужна, чтобы не удалить не тот букет
          if (data.name?.value) {
            const name = data.name.value;
            const bouquet = bouquets.find((item) => item.name === name);
            if (bouquet) removeBouquet(bouquet.id);
            else console.error("Букет не найден");
          }
        }}
        types={types}
        bouquets={bouquets}
      />
    </>
  );
}

export default RemoveBouquetContainer;
