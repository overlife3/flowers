import React from "react";
import style from "./HorizontalLine.module.scss";
type Props = {
  cn?: string;
};

function HorizontalLine({ cn }: Props) {
  return <div className={style.line + " " + (cn || "")}></div>;
}

export default HorizontalLine;
