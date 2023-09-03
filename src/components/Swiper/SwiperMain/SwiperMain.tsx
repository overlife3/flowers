import React from "react";
import style from "./SwiperMain.module.scss";
import image01 from "../../../assets/images/main/01.jpg";
import image02 from "../../../assets/images/main/02.jpg";
import image03 from "../../../assets/images/main/03.jpg";

import { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SvgSelector from "../../SvgSelector/SvgSelector";
function SwiperMain() {
  const mainSwiperOptions: SwiperType = {
    navigation: {
      nextEl: ".custom-next-button",
      prevEl: ".custom-prev-button",
    },
    modules: [FreeMode, Navigation, EffectFade],
    className: style.swiper,
    allowTouchMove: false,
    spaceBetween: 10,
    effect: "fade",
    style: {
      "--swiper-navigation-color": "#fff",
      "--swiper-pagination-color": "#fff",
      "--swiper-pagination-bullet-inactive-color": "#000",
    },
  };
  return (
    <div className={style.container}>
      <div className={style.main}>
        <Swiper {...mainSwiperOptions}>
          <SwiperSlide className={style.swiper_slide}>
            <div className={style.photo_wrapper}>
              <img src={image02} />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiper_slide}>
            <div className={style.photo_wrapper}>
              <img src={image03} />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiper_slide}>
            <div className={style.photo_wrapper}>
              <img src={image01} />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="custom-next-button">
          <SvgSelector name="down" />
        </div>
        <div className="custom-prev-button">
          <SvgSelector name="down" />
        </div>
      </div>
    </div>
  );
}

export default SwiperMain;
