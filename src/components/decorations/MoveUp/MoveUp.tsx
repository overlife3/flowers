import React from "react";
import SvgSelector from "../../SvgSelector/SvgSelector";
import style from "./MoveUp.module.scss";
function MoveUp() {
  const handleClick = () => {
    document.querySelector("body")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={style.move_up} onClick={handleClick}>
      <SvgSelector name="down" />
    </div>
  );
}

export default MoveUp;
