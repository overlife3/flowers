import React, { useState } from "react";
import style from "./SwiperBouquet.module.scss";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, EffectFade, Thumbs } from "swiper/modules";
import "../swiper.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import SvgSelector from "../../SvgSelector/SvgSelector";

type Props = {
  images: string[];
};

function SwiperBouquet({ images }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const mainSwiperOptions: SwiperType = {
    navigation: {
      nextEl: ".custom-next-button",
      prevEl: ".custom-prev-button",
    },
    modules: [FreeMode, Navigation, EffectFade, Thumbs],
    className: style.swiper,
    allowTouchMove: false,
    spaceBetween: 10,
    effect: "fade",
    thumbs: {
      swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
    },
    style: {
      "--swiper-navigation-color": "#fff",
      "--swiper-pagination-color": "#fff",
      "--swiper-pagination-bullet-inactive-color": "#000",
    },
  };

  const otherSwiperOptions: SwiperType = {
    slidesPerView: 5,
    spaceBetween: 10,
    onSwiper: setThumbsSwiper,
    watchSlidesProgress: true,
    freeMode: true,
    modules: [FreeMode, Navigation, Thumbs],
    className: "mySwiper",
    breakpoints: {
      861: {
        slidesPerView: 5,
      },
      860: {
        slidesPerView: 4,
      },
      0: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <div className={style.container}>
      <div className={style.main}>
        <Swiper {...mainSwiperOptions}>
          {images.map((item) => (
            <SwiperSlide className={style.swiper_slide}>
              <div className={style.photo_wrapper}>
                <img src={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-next-button">
          <SvgSelector name="down" />
        </div>
        <div className="custom-prev-button">
          <SvgSelector name="down" />
        </div>
      </div>
      <div className={style.other}>
        <Swiper {...otherSwiperOptions}>
          {images.map((item, index) => (
            <SwiperSlide className={style.swiper_slide}>
              <div className={style.photo_wrapper}>
                <img src={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SwiperBouquet;
