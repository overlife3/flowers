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
            <a
              className={style.link}
              href="https://instagram.com/podarok_buket_kanash?igshid=MzMyNGUyNmU2YQ=="
            >
              <SvgSelector name="inst" cn={style.svg} />
            </a>
            <a
              className={style.link}
              href="https://wa.me/79656896990?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C"
            >
              <SvgSelector name="whats" cn={style.svg} />
            </a>
            <a
              className={style.link}
              href="https://vk.com/pogarok_buket_kanash"
            >
              <SvgSelector name="vk" cn={style.svg} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
