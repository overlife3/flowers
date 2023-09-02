import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../../components/Admin/Main/Main";
import style from "./Admin.module.scss";

function Admin() {
  return (
    <div className={style.container}>
      <Main />
    </div>
  );
}

export default Admin;
