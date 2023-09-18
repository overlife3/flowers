import classNames from "classnames";
import React, { useState } from "react";
import BurgerMenu from "../../components/decorations/BurgerMenu/BurgerMenu";
import Logo from "../../components/Logo/Logo";
import SideNav from "../../components/SideNav/SideNav";
import SvgSelector from "../../components/SvgSelector/SvgSelector";
import { useChildComponentRef } from "../../context/refs";
import style from "./Header.module.scss";

const Header = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const headerCn = classNames(style.header, {
    [style.menuIsVisible]: menuIsVisible,
  });
  const toggleMenu = () => {
    setMenuIsVisible((prevState) => {
      return !prevState;
    });
  };

  const closeMenu = () => {
    setMenuIsVisible(false);
  };

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

  return (
    <>
      <header className={headerCn}>
        <div className={style.container}>
          <Logo />
          <div className={style.links}>
            <a onClick={scrollToCatalog}>Каталог</a>
            <a onClick={scrollToMake}>Заказать букет</a>
            <a onClick={scrollToAdvantages}>Преимущества</a>
            <a onClick={scrollToMaster}>Ваш мастер</a>
          </div>
          <div className={style.contacts}>
            <a
              className={style.svg}
              href="https://instagram.com/podarok_buket_kanash?igshid=MzMyNGUyNmU2YQ=="
            >
              <SvgSelector name="inst" />
            </a>
            <a
              className={style.svg}
              href="https://wa.me/79656896990?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C"
            >
              <SvgSelector name="whats" />
            </a>
            <a className={style.svg} href="https://vk.com/pogarok_buket_kanash">
              <SvgSelector name="vk" />
            </a>
            <span className={style.phone}>+7 (965) 689-69-90</span>
          </div>
          <BurgerMenu cn={style.burger} onClick={toggleMenu} />
        </div>
      </header>
      <SideNav isOpened={menuIsVisible} onClose={closeMenu} />
    </>
  );
};

export default Header;
