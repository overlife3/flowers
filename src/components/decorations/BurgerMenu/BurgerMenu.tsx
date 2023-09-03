import classNames from "classnames";
import React from "react";
import style from "./BurgerMenu.module.scss";

type Props = {
  cn?: string;
  onClick: () => void;
};

function BurgerMenu({ cn, onClick }: Props) {
  const burgerCn = classNames(style.burger, cn);
  return (
    <div className={burgerCn} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default BurgerMenu;
