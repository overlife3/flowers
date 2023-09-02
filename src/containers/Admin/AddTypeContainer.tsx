import React from "react";
import AddTypeForm from "../../components/Admin/AddType/AddTypeForm/AddTypeForm";

function AddTypeContainer() {
  // Делать постоянную проверку, занято ли название
  return (
    <>
      <AddTypeForm onSubmit={() => {}} />
    </>
  );
}

export default AddTypeContainer;
