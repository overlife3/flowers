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

        <p>Меня зовут Наталия, я из Канаша Мне 36 лет.</p>
        <p>В первую очередь я жена и мама 3 детей (2 сына и дочка лапочка).</p>
        <p>
          У меня есть моё любимое дело - фуд-флорист. Мои букеты влюбляешься и
          получаешь восторг, которые не завянут. Наслаждаться разными вкусами и
          можно съесть.
        </p>
        <p>
          За 4 года научилась делать детские, мужские и для прекрасных дам
          букеты. На разную сумму и бюджет. Было сделано более 1000 букетов. На
          праздники за день делала более 15 букетов.
        </p>
        <p>
          Пришла к осознанию не хочу работать по найму, открываю мастерскую
          съедобные букеты в центре города Канаш. Основательно хочу заниматься
          фуд-флористом.
        </p>
        <p>
          Как часто говорю, я не продаю букеты, а создаю эмоцию. Сначала дарю
          настроение тому кто заказывает, а потом только тому кому предназначен.
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
