import React, { FC } from "react";
import SvgSelector from "../SvgSelector/SvgSelector";
import style from "./Logo.module.scss";
type Props = {
  cn?: string;
};

const Logo: FC<Props> = ({ cn }) => {
  return (
    <a className={cn ? style.logo + " " + cn : style.logo}>
      <SvgSelector name="flowers" cn={style.svg} />
      <p className={style.text}>
        <p className={style.company}>Букет</p>
        <p className={style.slogan}>счастье есть</p>
      </p>
    </a>
  );
};

export default Logo;
