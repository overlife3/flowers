import React, { forwardRef } from "react";
import HorizontalLine from "../../components/decorations/HorizontalLine/HorizontalLine";
import main_photo from "../../assets/images/master/main.jpg";
import big_photo from "../../assets/images/master/big.jpg";
import small_photo from "../../assets/images/master/small.jpg";

import style from "./Master.module.scss";

const Master = forwardRef<any>((props, ref) => (
  <section className={style.section} ref={ref}>
    <p className={style.title}>Ваш мастер вкусных букетов</p>
    <div className={style.content}>
      <div className={style.text}>
        <p className={style.text_title}>Привет, давай знакомиться!</p>

        <p>Меня зовут Наталия, я из Канаша. Мне 37 лет.</p>
        <p>В первую очередь я жена и мама 3 детей (2 сына и дочка лапочка).</p>
        <p>
          У меня есть любимое дело - фуд-флористика. Фуд-флористика – это
          создание букетов и корзин из съедобных ингредиентов.
        </p>
        <p>
          За 4 года я научилась делать детские, мужские и для прекрасных дам
          букеты. На разную сумму и бюджет. Было сделано более 1000 букетов. На
          праздники за день делала более 15 букетов.
        </p>
        <p>
          Пришла к осознанию не хочу работать по найму, открываю мастерскую
          съедобных букетов в центре города Канаш. Основательно хочу заняться
          этим делом.
        </p>
        <p>
          В мои букеты влюбляешься. Как я часто говорю: я не продаю букеты, а
          создаю эмоции. Сначала дарю настроение тому кто заказывает, а только
          потом тому, кому этот букет предназначен.
        </p>
      </div>

      <div className={style.images}>
        <div className={style.main_photo + " " + style.img_container}>
          <img src={main_photo} />
        </div>
        <div className={style.small_photo + " " + style.img_container}>
          <img src={small_photo} />
        </div>
        <div className={style.big_photo + " " + style.img_container}>
          <img src={big_photo} />
        </div>
      </div>
    </div>
    <HorizontalLine />
  </section>
));

export default Master;
