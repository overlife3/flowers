import React from "react";
import { Controller, useForm } from "react-hook-form";
import { createOptionListFromTypesList } from "../../../../helpers/createOptionListFromTypesList";
import { typesBouquet } from "../../../../MOCK/MOCK";
import { TypeBouquet } from "../../../../types/types";
import Select from "../../../Form/Select/Select";
import ToBack from "../../../ToBack/ToBack";
import style from "./RemoveTypeForm.module.scss";

type FormState = {
  type: TypeBouquet;
};

type Props = {
  onSubmit: () => void;
};

function RemoveTypeForm({ onSubmit }: Props) {
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
      <p className={style.title}>Удалить вид букета</p>
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
      <div className={style.btns}>
        <ToBack to="/admin" cn={style.to_back} />
        <button className={style.btn} type="submit">
          Добавить
        </button>
      </div>
    </form>
  );
}

export default RemoveTypeForm;
