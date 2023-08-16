import React from "react";
import SvgSelector from "../../SvgSelector/SvgSelector";
import style from "./MoveUp.module.scss";
function MoveUp() {
  return (
    <div className={style.move_up}>
      <SvgSelector name="down" />
    </div>
  );
}

export default MoveUp;
