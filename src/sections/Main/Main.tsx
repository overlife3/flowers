import React, { FC } from "react";
import HorizontalLine from "../../components/decorations/HorizontalLine/HorizontalLine";
import SwiperMain from "../../components/Swiper/SwiperMain/SwiperMain";
import style from "./Main.module.scss";

type Props = { catalogRef: any };

const Main: FC<Props> = ({ catalogRef }) => {
  const scrollToCatalog = () => {
    if (catalogRef.current)
      catalogRef.current.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <main className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <h1 className={style.text}>Мастерская съедобных букетов</h1>
          <p className={style.text_1}>Индивидуальный подход</p>
          <p className={style.text_2}>Доставка Канаш и Канашский район</p>
          <button className={style.buy_btn} onClick={scrollToCatalog}>
            Заказать букет
          </button>
        </div>
        <div className={style.images}>
          <SwiperMain />
        </div>
      </div>
      <HorizontalLine />
    </main>
  );
};

export default Main;
