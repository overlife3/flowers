import React from "react";
import { useNavigate } from "react-router-dom";
import ToBack from "../../ToBack/ToBack";
import style from "./Main.module.scss";

function Main() {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <p className={style.title}>Здравствуйте Admin</p>

      <button className={style.btn} onClick={() => navigate("add-type")}>
        Добавить вид
      </button>
      <button className={style.btn} onClick={() => navigate("add-bouquet")}>
        Добавить букет
      </button>
      <button className={style.btn} onClick={() => navigate("remove-type")}>
        Удалить вид
      </button>
      <button className={style.btn} onClick={() => navigate("remove-bouquet")}>
        Удалить букет
      </button>

      <ToBack to="/" />
    </div>
  );
}

export default Main;
