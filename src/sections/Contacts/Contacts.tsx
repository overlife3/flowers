import React from "react";
import Logo from "../../components/Logo/Logo";
import SvgSelector from "../../components/SvgSelector/SvgSelector";
import style from "./Contacts.module.scss";

function Contacts() {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.block}>
          <p className={style.logo}>
            <Logo cn={style.logo_svg} />
          </p>
          <p className={style.words}>Сделайте подарок близкому человеку!</p>
          <p className={style.phone}>+7 (965) 689-69-90</p>
          <div className={style.links}>
            {" "}
            <a className={style.link}>
              <SvgSelector name="inst" cn={style.svg} />
            </a>
            <a className={style.link}>
              <SvgSelector name="whats" cn={style.svg} />
            </a>
            <a className={style.link}>
              <SvgSelector name="vk" cn={style.svg} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
