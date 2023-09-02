import React from "react";
import RemoveBouquetForm from "../../components/Admin/RemoveBouquet/RemoveBouquetForm/RemoveBouquetForm";
import { typesBouquet } from "../../MOCK/MOCK";

function RemoveBouquetContainer() {
  return (
    <>
      <RemoveBouquetForm onSubmit={() => {}} typesBouquet={typesBouquet} />
    </>
  );
}

export default RemoveBouquetContainer;
