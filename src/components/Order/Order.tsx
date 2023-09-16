import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { bouquetImages } from "../../MOCK/MOCK";
import {
  BouquetOrder,
  BouquetsOrder,
  Delivery,
  RadioOptionType,
} from "../../types/types";
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
import ErrorAlert from "../Alert/ErrorAlert/ErrorAlert";
import Loader from "../Loader/Loader";

type Props = {
  bouquetsOrder: BouquetsOrder;
  onSubmit: (data: FormState) => void;
  isLoading: boolean;
  error: any;
  setErrorRes: (value: any) => void;
};

export type FormState = {
  bouquetsOrder: BouquetOrder[];
  name: string;
  phone: string;
  delivery: Delivery;
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
    title: "Доставка (по стоимости такси)",
    value: "courier",
  },
];

function Order({
  bouquetsOrder,
  onSubmit,
  isLoading,
  error,
  setErrorRes,
}: Props) {
  // const [arrBouquetsOrder, setArrBouquetsOrder] = useState<BouquetOrder[]>([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [havCourier, setHavCourier] = useState(false);
  let totalPrice = 0;
  const arrBouquetsOrder = Object.keys(bouquetsOrder).map((key) => {
    const bouquetOrder = bouquetsOrder[key];
    // setTotalPrice(
    // (prevState) =>
    totalPrice += bouquetOrder.count * Number(bouquetOrder.item.price);
    // );
    return bouquetOrder;
  });
  const {
    control,
    register,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
    setValue,
    setError,
    getValues,
    reset,
  } = useForm<FormState>({
    defaultValues: {
      bouquetsOrder: arrBouquetsOrder,
      name: "",
      phone: "",
      delivery: "pickup",
      address: "",
      date: null,
      time: null,
    },
    mode: "onSubmit",
  });

  useEffect(() => {
    setValue("bouquetsOrder", arrBouquetsOrder);
  }, [bouquetsOrder]);

  const toSubmit = (data: FormState) => {
    if (getValues("bouquetsOrder").length === 0) {
      setError("bouquetsOrder", {
        type: "required",
        message: "Выберите букеты в каталоге",
      });
    } else {
      onSubmit(data);
      reset();
    }
  };

  return (
    <div className={style.container}>
      <form className={style.body} onSubmit={handleSubmit(toSubmit)}>
        <div className={style.to_back}>
          <ToBack to="/" />
        </div>

        <div className={style.content}>
          <div className={style.header}>
            <p className={style.title}>Корзина букетов:</p>
          </div>
          <div className={style.list}>
            {arrBouquetsOrder.length === 0 && (
              <p className={style.missing_order_message}>Корзина пуста</p>
            )}
            {arrBouquetsOrder.map((item) => (
              <OrderedBouquet
                id={item.item.id}
                image={item.item.image[0]}
                count={item.count}
                name={item.item.name}
                price={item.item.price}
                cn={style.order}
              />
            ))}
            {errors.bouquetsOrder && (
              <ErrorAlert title={errors.bouquetsOrder.message || ""} />
            )}
          </div>
          <p className={style.amount}>
            Сумма: <span className={style.value}>{totalPrice}</span> р.
          </p>
        </div>
        <label className={style.field + " " + style.name}>
          <p className={style.field_title}>Как вас зовут:</p>
          <input
            type="text"
            {...register("name", { required: "Обязательное поле" })}
            className={style.input}
          />
          {errors.name && <ErrorAlert title={errors.name.message || ""} />}
        </label>
        <label className={style.field + " " + style.phone}>
          <p className={style.field_title}>Ваш телефон:</p>
          <Controller
            control={control}
            name="phone"
            rules={{
              required: "Обязательное поле",
              validate: (value) => {
                const reg = /^\+?[1-9][0-9]{10,14}$/;
                if (reg.test(value)) return true;
                return "Неправильно введен номер";
              },
            }}
            render={({ field: { onChange, value } }) => (
              <InputPhone onChange={onChange} value={value} />
            )}
          />
        </label>
        {errors.phone && <ErrorAlert title={errors.phone.message || ""} />}

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
                onChange={(value) => {
                  if (value === "courier") {
                    setHavCourier(true);
                  } else {
                    setHavCourier(false);
                  }
                  onChange(value);
                }}
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
            {...register("address", { required: "Обязательное поле" })}
            className={style.input}
            placeholder="г. Канаш, ул. Зеленая, д. 1"
          />
        </label>
        {errors.address && <ErrorAlert title={errors.address.message || ""} />}

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
        <p className={style.total_amount}>
          Итоговая сумма: {totalPrice}р. {havCourier && "+ доставка"}
        </p>
        <div className={style.submit_container}>
          {isLoading && <Loader />}
          <button
            type="submit"
            className={style.submit_btn}
            disabled={isSubmitted && !isValid}
          >
            Заказать
          </button>
        </div>
        {error && (
          <ErrorAlert
            cn={style.error_alert}
            title="Произошла ошибка"
            desc="Повторите отправку"
            onClick={() => setErrorRes(null)}
          />
        )}
        <p className={style.politics}>
          Отправляя заказ, вы соглашаетесь с{" "}
          <Link to={"/politics"}>политикой конфиденциальности</Link>
        </p>
      </form>
    </div>
  );
}

export default Order;
