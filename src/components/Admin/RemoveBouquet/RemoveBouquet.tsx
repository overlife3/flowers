import React from "react";
import RemoveBouquetContainer from "../../../containers/Admin/RemoveBouquetContainer";
import OverlayContainer from "../../decorations/OverlayContainer/OverlayContainer";

function RemoveBouquet() {
  return (
    <OverlayContainer>
      <RemoveBouquetContainer />
    </OverlayContainer>
  );
}

export default RemoveBouquet;
