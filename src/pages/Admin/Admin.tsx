import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Main from "../../components/Admin/Main/Main";
import OverlayContainer from "../../components/decorations/OverlayContainer/OverlayContainer";

function Admin() {
  return (
    <OverlayContainer>
      <Outlet />
    </OverlayContainer>
  );
}

export default Admin;
