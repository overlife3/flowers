import classNames from "classnames";
import React, { useRef } from "react";
import { useChildComponentRef } from "../../context/refs";
import useOutsideClick from "../../hooks/useOutsideClick";
import SvgSelector from "../SvgSelector/SvgSelector";
import style from "./SideNav.module.scss";

type Props = {
  isOpened: boolean;
  onClose: () => void;
};

function SideNav({ isOpened, onClose }: Props) {
  const containerRef = useRef(null);

  const { catalogRef, makeRef, advantagesRef, masterRef } =
    useChildComponentRef();
  const scrollToCatalog = () => {
    if (catalogRef.current)
      catalogRef.current.scrollIntoView({
        behavior: "smooth",
      });
  };
  const scrollToMake = () => {
    if (makeRef.current) makeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAdvantages = () => {
    if (advantagesRef.current)
      advantagesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToMaster = () => {
    if (masterRef.current)
      masterRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const containerCn = classNames(style.container, {
    [style.isOpened]: isOpened,
  });
  return (
    <div className={containerCn} ref={containerRef}>
      <div className={style.links}>
        <a onClick={scrollToCatalog}>Каталог</a>
        <a onClick={scrollToMake}>Заказать букет</a>
        <a onClick={scrollToAdvantages}>Преимущества</a>
        <a onClick={scrollToMaster}>Ваш мастер</a>
      </div>
      <div className={style.contacts}>
        <a className={style.svg}>
          <SvgSelector name="inst" />
        </a>
        <a className={style.svg}>
          <SvgSelector name="whats" />
        </a>
        <a className={style.svg}>
          <SvgSelector name="vk" />
        </a>
        <span className={style.phone}>+7 (965) 689-69-90</span>
      </div>
    </div>
  );
}

export default SideNav;
