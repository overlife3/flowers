import React, { ReactNode } from "react";
import style from "./OverlayContainer.module.scss";
type Props = {
  children: ReactNode;
};

function OverlayContainer({ children }: Props) {
  return (
    <div className={style.container}>
      <div className={style.body}>{children}</div>
    </div>
  );
}

export default OverlayContainer;
