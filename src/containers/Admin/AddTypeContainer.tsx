import React from "react";
import AddTypeForm from "../../components/Admin/AddType/AddTypeForm/AddTypeForm";
import { addTypeBouquet } from "../../firebase/addTypeBouquet";

function AddTypeContainer() {
  // Делать постоянную проверку, занято ли название

  return (
    <>
      <AddTypeForm
        onSubmit={(data) => {
          const type = data.type;
          addTypeBouquet(type);
        }}
      />
    </>
  );
}

export default AddTypeContainer;
