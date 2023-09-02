import React from "react";
import AddBouquetForm from "../../components/Admin/AddBouquet/AddBouquetForm/AddBouquetForm";
import { typesBouquet } from "../../MOCK/MOCK";

function AddBouquetContainer() {
  return (
    <>
      <AddBouquetForm onSubmit={() => {}} typesBouquet={typesBouquet} />
    </>
  );
}

export default AddBouquetContainer;
