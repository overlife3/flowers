import React, { forwardRef } from "react";
import Advantage from "../../components/Card/Advantage/Advantage";
import style from "./Advantages.module.scss";

const Advantages = forwardRef<any>((props, ref) => (
  <section className={style.container} ref={ref}>
    <h2 className={style.title}>Преимущества заказа в нашей мастерской</h2>
    <Advantage
      cn={style.advantage}
      item={{
        name: "С каждым днём всё больше",
        description:
          "Уже более 3-х лет мы дарим гастрономическое и эстетическое удовольствие людям. Более 5000 довольных клиентов",
      }}
    />
    <Advantage
      cn={style.advantage}
      item={{
        name: "Онлайн заказы",
        description: "Заказать онлайн легко, без визита в мастерскую",
      }}
    />
    <Advantage
      cn={style.advantage}
      item={{
        name: "4 лучших варианта",
        description:
          "Хотите забирайте букет самостоятельно или мы доставим его вам курьерской службой. Вручим букет за вас от вашего имени или анонимно",
      }}
    />
    <Advantage
      cn={style.advantage}
      item={{
        name: "Все букеты с пылу - с жару",
        description:
          "Букеты и композиции создаются за 1 час до выдачи, чтобы максимально сохранить их свежесть",
      }}
    />
    <Advantage
      cn={style.advantage}
      item={{
        name: "Индивидуальный подход к каждому клиенту",
        description:
          "Если вы не нашли желаемую композицию, мы создадим эксклюзивный вариант для вас",
      }}
    />
    <Advantage
      cn={style.advantage}
      item={{
        name: "Заботимся о вас",
        description: "Все элементы декора проходят антибактериальную обработку",
      }}
    />
    <Advantage
      cn={style.advantage}
      item={{
        name: "Корпоративные заказы",
        description: "Индивидуальный подход и выгодные предложения для вас",
      }}
    />
  </section>
));

export default Advantages;
