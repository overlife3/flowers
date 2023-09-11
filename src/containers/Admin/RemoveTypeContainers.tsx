import React from "react";
import RemoveTypeForm from "../../components/Admin/RemoveType/RemoveTypeForm/RemoveTypeForm";
import { removeTypeBouquet } from "../../firebase/removeTypeBouquet";
import { useAppSelector } from "../../hooks/useAppSelector";

function RemoveTypeContainers() {
  const types = useAppSelector((store) => store.bouquets.types);

  return (
    <RemoveTypeForm
      onSubmit={(data) => {
        const id = data.type.id;
        removeTypeBouquet(id);
      }}
      types={types}
    />
  );
}

export default RemoveTypeContainers;
