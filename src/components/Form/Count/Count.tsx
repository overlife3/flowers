import classNames from "classnames";
import React, { useEffect, useState } from "react";
import SvgSelector from "../../SvgSelector/SvgSelector";
import style from "./Count.module.scss";

type Props = {
  initialValue: number;
  maxValue: number;
};

function Count({ initialValue, maxValue }: Props) {
  const [count, setCount] = useState(initialValue);

  const [plusIsVisible, setPlusIsVisible] = useState(true);
  const [minusIsVisible, setMinusIsVisible] = useState(true);

  useEffect(() => {
    if (count === maxValue) {
      setPlusIsVisible(false);
    } else {
      setPlusIsVisible(true);
    }
    if (count === 0) {
      setMinusIsVisible(false);
    } else {
      setMinusIsVisible(true);
    }
  }, [count]);

  const increment = () => {
    if (count < maxValue) {
      setCount((prev) => ++prev);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount((prev) => --prev);
    }
  };

  const minusCn = classNames(style.minus, {
    [style.isHidden]: !minusIsVisible,
  });

  const plusCn = classNames(style.plus, { [style.isHidden]: !plusIsVisible });

  return (
    <div className={style.count}>
      <span className={minusCn} onClick={decrement}>
        <SvgSelector name="minus" />
      </span>
      <p className={style.value}>{count}</p>
      <span className={plusCn} onClick={increment}>
        <SvgSelector name="cross" />
      </span>
    </div>
  );
}

export default Count;
