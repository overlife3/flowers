import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { createOptionListFromTypesList } from "../../helpers/createOptionListFromTypesList";
import { TypeBouquet } from "../../types/types";
import InputNum from "../Form/InputNum/InputNum";
import Select, { IOptionSelect } from "../Form/Select/Select";
import style from "./FilterBouquet.module.scss";

type FormState = {
  type: TypeBouquet;
  name: string;
  lower_price: number;
  upper_price: number;
};

type Props = {
  types: TypeBouquet[];
  lowerPriceDefault: number;
  upperPriceDefault: number;
  cn?: string;
  onSubmit: (data: FormState) => void;
};

function FilterBouquet({
  types,
  cn,
  lowerPriceDefault,
  upperPriceDefault,
  onSubmit,
}: Props) {
  const {
    control,
    register,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
    setValue,
  } = useForm<FormState>({
    defaultValues: {
      type: undefined,
      name: "",
      lower_price: lowerPriceDefault,
      upper_price: upperPriceDefault,
    },
    mode: "onSubmit",
  });

  useEffect(() => {
    setValue("lower_price", lowerPriceDefault);
    setValue("upper_price", upperPriceDefault);
  }, [lowerPriceDefault, upperPriceDefault]);

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.group_field}>
        <div className={style.field}>
          <p className={style.field_title}>Вид</p>
          <Controller
            name="type"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                onChange={onChange}
                options={createOptionListFromTypesList(types)}
                value={value}
                placeholder={"Выберите вид букетов"}
                cn={style.select}
              />
            )}
          />
        </div>
        <div className={style.field + " " + style.input_name}>
          <p className={style.field_title}>Название</p>
          <input type="text" {...register("name")} />
        </div>
      </div>

      <div className={style.group_field}>
        <div className={style.field}>
          <p className={style.field_title}>Цена</p>
          <div className={style.price}>
            <div className={style.price_group}>
              <p className={style.price_group_title}>От:</p>
              <Controller
                name="lower_price"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputNum
                    onChange={onChange}
                    value={String(value)}
                    placeholder={String(lowerPriceDefault) || ""}
                  />
                )}
              />
            </div>
            <div className={style.price_group}>
              <p className={style.price_group_title}>До:</p>
              <Controller
                name="upper_price"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputNum
                    onChange={onChange}
                    value={String(value)}
                    placeholder={String(upperPriceDefault) || ""}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <button type="submit" className={style.btn}>
          Поиск
        </button>
      </div>
    </form>
  );
}

export default FilterBouquet;
