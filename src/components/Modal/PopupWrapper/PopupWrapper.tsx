import React, { ReactNode, useRef } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import style from "./PopupWrapper.module.scss";

type Props = {
  onClose: () => void;
  isOpened: boolean;
  children: ReactNode;
};

function PopupWrapper({ onClose, isOpened, children }: Props) {
  const bodyRef = useRef(null);

  useOutsideClick(bodyRef, onClose);

  if (!isOpened) return null;

  return (
    <div className={style.container}>
      <div className={style.body} ref={bodyRef}>
        {children}
      </div>
    </div>
  );
}

export default PopupWrapper;
