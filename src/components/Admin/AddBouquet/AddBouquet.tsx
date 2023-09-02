import React from "react";
import AddBouquetContainer from "../../../containers/Admin/AddBouquetContainer";
import OverlayContainer from "../../decorations/OverlayContainer/OverlayContainer";

function AddBouquet() {
  return (
    <OverlayContainer>
      <AddBouquetContainer />
    </OverlayContainer>
  );
}

export default AddBouquet;