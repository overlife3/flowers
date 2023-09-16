import React, { ReactNode, useEffect, useRef } from "react";
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

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = "hidden";
      body.style.paddingRight = "15px";
    }

    return () => {
      if (body) {
        body.style.overflow = "auto";
        body.style.paddingRight = "0";
      }
    };
  }, []);

  if (!isOpened) return null;

  return (
    <div className={style.container}>
      <div className={style.body}>
        <div className={style.content} ref={bodyRef}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default PopupWrapper;
