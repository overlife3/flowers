import React from "react";
import classNames from "classnames";
import style from "./ErrorAlert.module.scss";

type Props = {
  title: string;
  desc?: string;
  cn?: string;
  onClick?: () => void;
};

function ErrorAlert({ title, desc, cn, onClick }: Props) {
  const alertCn = classNames(style.alert, cn);

  return (
    <div className={alertCn}>
      <p className={style.title}>{title}</p>
      <p className={style.desc}>{desc || ""}</p>
      {onClick && (
        <button onClick={onClick} className={style.btn} type="button">
          Ок
        </button>
      )}
    </div>
  );
}

export default ErrorAlert;
