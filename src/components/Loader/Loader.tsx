import React from "react";
import classNames from "classnames";
import loaderGif from "../../assets/gifs/loading.gif";
import style from "./Loader.module.scss";
type Props = {
  cn?: string;
};

function Loader({ cn }: Props) {
  const loaderCn = classNames(style.loader, cn);

  return (
    <div className={loaderCn}>
      <img src={loaderGif} alt="loading..." />
    </div>
  );
}

export default Loader;
