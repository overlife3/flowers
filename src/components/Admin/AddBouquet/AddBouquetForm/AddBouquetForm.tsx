import React from "react";
import { TypeBouquet } from "../../../../types/types";

type Props = {
  onSubmit: () => void;
  typesBouquet: TypeBouquet[];
};

function AddBouquetForm({ onSubmit, typesBouquet }: Props) {
  return <div>AddBouquetForm</div>;
}

export default AddBouquetForm;
