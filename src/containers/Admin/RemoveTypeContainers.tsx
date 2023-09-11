import React from "react";
import RemoveTypeForm from "../../components/Admin/RemoveType/RemoveTypeForm/RemoveTypeForm";
import { removeTypeBouquet } from "../../firebase/removeTypeBouquet";
import { useAppSelector } from "../../hooks/useAppSelector";

function RemoveTypeContainers() {
  const { types, bouquets } = useAppSelector((store) => store.bouquets);

  return (
    <RemoveTypeForm
      onSubmit={(data) => {
        const id = data.type.id;
        removeTypeBouquet(id);
      }}
      types={types}
      bouquets={bouquets}
    />
  );
}

export default RemoveTypeContainers;
