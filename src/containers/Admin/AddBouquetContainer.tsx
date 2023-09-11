import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import AddBouquetForm from "../../components/Admin/AddBouquet/AddBouquetForm/AddBouquetForm";
import { getBouquet } from "../../firebase/getBoququt";
import { setBouquet } from "../../firebase/setBouquet";
// import { getBouquet } from "../../firebase/getBouquet";

import { typesBouquet } from "../../MOCK/MOCK";

function AddBouquetContainer() {
  return (
    <>
      <AddBouquetForm
        onSubmit={(data) => {
          // setBouquet(nanoid(), data.name);
          console.log("start");
          getBouquet();
        }}
        typesBouquet={typesBouquet}
      />
    </>
  );
}

export default AddBouquetContainer;
