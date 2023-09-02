import React from "react";
import AuthContainer from "../../containers/Admin/AuthContainer";
import style from "./AdminAuth.module.scss";
function AdminAuth() {
  return (
    <div className={style.container}>
      <AuthContainer />
    </div>
  );
}

export default AdminAuth;
