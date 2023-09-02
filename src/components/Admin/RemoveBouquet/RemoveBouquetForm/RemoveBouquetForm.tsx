import React from "react";
import { Controller, useForm } from "react-hook-form";
import { createOptionListFromTypesList } from "../../../../helpers/createOptionListFromTypesList";
import { TypeBouquet } from "../../../../types/types";
import Select from "../../../Form/Select/Select";
import ToBack from "../../../ToBack/ToBack";
import style from "./RemoveBouquetForm.module.scss";

type Props = {
  onSubmit: () => void;
  typesBouquet: TypeBouquet[];
};

type FormState = {
  type: TypeBouquet;
  name: string;
};

function RemoveBouquetForm({ onSubmit, typesBouquet }: Props) {
  const {
    control,
    register,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
  } = useForm<FormState>({
    defaultValues: {
      type: undefined,
    },
    mode: "onSubmit",
  });
  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={style.title}>Удалить букет</p>
      <div className={style.field}>
        <p className={style.field_title}>Вид:</p>
        <Controller
          name="type"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              onChange={onChange}
              options={createOptionListFromTypesList(typesBouquet)}
              value={value}
              placeholder={"all"}
              cn={style.select}
            />
          )}
        />
      </div>

      <label className={style.field}>
        <p className={style.field_title}>Название:</p>
        <input type="text" {...register("name")} />
      </label>

      <div className={style.btns}>
        <ToBack to="/admin" cn={style.to_back} />
        <button className={style.btn} type="submit">
          Добавить
        </button>
      </div>
    </form>
  );
}

export default RemoveBouquetForm;
