import React from "react";
import { Controller, useForm } from "react-hook-form";
import { createOptionListFromTypesList } from "../../helpers/createOptionListFromTypesList";
import { TypeBouquet } from "../../types/types";
import InputNum from "../Form/InputNum/InputNum";
import Select, { IOptionSelect } from "../Form/Select/Select";
import style from "./FilterBouquet.module.scss";

type FormState = {
  type: TypeBouquet;
  name: string;
  lower_price: string;
  upper_price: string;
};

type Props = {
  types: TypeBouquet[];
  lowerPriceDefault?: string;
  upperPriceDefault?: string;
  cn?: string;
};

function FilterBouquet({
  types,
  cn,
  lowerPriceDefault,
  upperPriceDefault,
}: Props) {
  const {
    control,
    register,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
  } = useForm<FormState>({
    defaultValues: {
      type: undefined,
      name: "",
      lower_price: "100",
      upper_price: "599",
    },
    mode: "onSubmit",
  });

  return (
    <form className={style.form}>
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
              placeholder={"all"}
              cn={style.select}
            />
          )}
        />
      </div>
      <div className={style.field + " " + style.input_name}>
        <p className={style.field_title}>Название</p>
        <input type="text" {...register("name")} />
      </div>
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
                  value={value}
                  placeholder={lowerPriceDefault || ""}
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
                  value={value}
                  placeholder={upperPriceDefault || ""}
                />
              )}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default FilterBouquet;
