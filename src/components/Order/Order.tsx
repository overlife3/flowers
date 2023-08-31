import React from "react";
import { Controller, useForm } from "react-hook-form";
import { bouquetImages } from "../../MOCK/MOCK";
import { Delivery, RadioOptionType } from "../../types/types";
import InputPhone from "../Form/InputPhone/InputPhone";
import SvgSelector from "../SvgSelector/SvgSelector";
import PopupWrapper from "../Modal/PopupWrapper/PopupWrapper";
import OrderedBouquet from "./OrderedBouquet/OrderedBouquet";
import DatePicker from "react-widgets/DatePicker";
import TimeInput from "react-widgets/TimeInput";
import Listbox from "react-widgets/Listbox";
import style from "./Order.module.scss";
import "react-widgets/styles.css";
import RadioGroup from "../Form/RadioGroup/RadioGroup";
import { Link } from "react-router-dom";
import ToBack from "../ToBack/ToBack";

type FormState = {
  name: string;
  phone: string;
  delivery: Delivery | null;
  address: string;
  date: Date | null;
  time: Date | null;
};

const deliveryOptions: RadioOptionType[] = [
  {
    title: "Самовывоз",
    value: "pickup",
  },
  {
    title: "Курьер",
    value: "courier",
  },
];

function Order() {
  const {
    control,
    register,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
  } = useForm<FormState>({
    defaultValues: {
      name: "",
      phone: "",
      delivery: null,
      address: "",
      date: null,
      time: null,
    },
    mode: "onSubmit",
  });
  return (
    <div className={style.container}>
      <form className={style.body}>
        <div className={style.to_back}>
          <ToBack to="/" />
        </div>

        <div className={style.content}>
          <div className={style.header}>
            <p className={style.title}>Корзина букетов:</p>
          </div>
          <div className={style.list}>
            {bouquetImages.map((image) => (
              <OrderedBouquet
                image={image}
                count={1}
                name="Name bouquet"
                price="1000"
                cn={style.order}
              />
            ))}
          </div>
          <p className={style.amount}>
            Сумма: <span className={style.value}>1000</span> р.
          </p>
        </div>
        <label className={style.field + " " + style.name}>
          <p className={style.field_title}>Как вас зовут:</p>
          <input type="text" {...register("name")} className={style.input} />
        </label>
        <label className={style.field + " " + style.phone}>
          <p className={style.field_title}>Ваш телефон:</p>
          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, value } }) => (
              <InputPhone onChange={onChange} value={value} />
            )}
          />
        </label>
        <label className={style.field}>
          <p className={style.field_title}>Доставка:</p>
          <Controller
            control={control}
            name="delivery"
            render={({ field: { onChange, value } }) => (
              <RadioGroup
                options={deliveryOptions}
                name={"delivery"}
                selected={value || deliveryOptions[0].value}
                onChange={onChange}
              />
            )}
          />
        </label>
        <label className={style.field + " " + style.address}>
          <p className={style.field_title}>
            Адрес доставки (если с доставкой):
          </p>
          <input
            type="text"
            {...register("address")}
            className={style.input}
            placeholder="г. Канаш, ул. Зеленая, д. 1"
          />
        </label>
        <label className={style.field + " " + style.date}>
          <p className={style.field_title}>Дата:</p>
          <Controller
            control={control}
            name="date"
            render={({ field: { onChange, value } }) => (
              <DatePicker
                placeholder="дд.мм.гггг"
                onChange={onChange}
                value={value}
                className={style.input}
                containerClassName={style.containerCn}
              />
            )}
          />
        </label>
        <label className={style.field}>
          <p className={style.field_title}>Время:</p>
          <Controller
            control={control}
            name="time"
            render={({ field: { onChange, value } }) => (
              <TimeInput onChange={onChange} value={value} />
            )}
          />
        </label>
        <p className={style.total_amount}>Итоговая сумма: {1000}</p>
        <button type="submit" className={style.submit_btn}>
          Оформить заказ
        </button>
        <p className={style.politics}>
          Отправляя заказ, вы соглашаетесь с{" "}
          <Link to={"/politics"}>политикой конфиденциальности</Link>
        </p>
      </form>
    </div>
  );
}

export default Order;
