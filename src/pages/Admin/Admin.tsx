import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../../components/Admin/Main/Main";
import OverlayContainer from "../../components/decorations/OverlayContainer/OverlayContainer";

function Admin() {
  return (
    <OverlayContainer>
      <Main />
    </OverlayContainer>
  );
}

export default Admin;
