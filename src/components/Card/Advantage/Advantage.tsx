import React from "react";
import SvgSelector from "../../SvgSelector/SvgSelector";
import style from "./Advantage.module.scss";

type AdvantageType = {
  name: string;
  description: string;
};

type Props = {
  item: AdvantageType;
  cn?: string;
};

function Advantage({ item, cn }: Props) {
  return (
    <div className={style.advantage + (cn ? "  " + cn : "")}>
      <div className={style.circle}>
        <SvgSelector name="hand" cn={style.icon} />
      </div>
      <div className={style.content}>
        <p className={style.name}>{item.name}</p>
        <p className={style.description}>{item.description}</p>
      </div>
    </div>
  );
}

export default Advantage;
