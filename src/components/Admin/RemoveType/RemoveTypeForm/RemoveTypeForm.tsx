import React from "react";
import { Controller, useForm } from "react-hook-form";
import { createOptionListFromTypesList } from "../../../../helpers/createOptionListFromTypesList";
import { getBouquetsByType } from "../../../../helpers/getBouquetsByType";
import { typesBouquet } from "../../../../MOCK/MOCK";
import { Bouquet, TId, TypeBouquet } from "../../../../types/types";
import Select from "../../../Form/Select/Select";
import ToBack from "../../../ToBack/ToBack";
import style from "./RemoveTypeForm.module.scss";

type FormState = {
  type: TypeBouquet;
};

type Props = {
  bouquets: Bouquet[];
  types: TypeBouquet[];
  onSubmit: (data: FormState) => void;
};

function RemoveTypeForm({ onSubmit, types, bouquets }: Props) {
  const {
    control,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
    reset,
  } = useForm<FormState>({
    defaultValues: {
      type: undefined,
    },
    mode: "onSubmit",
  });

  const toSubmit = (data: FormState) => {
    onSubmit(data);
    reset();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit(toSubmit)}>
      <p className={style.title}>Удалить вид букета</p>
      <div className={style.field}>
        <p className={style.field_title}>Вид:</p>
        <Controller
          name="type"
          control={control}
          rules={{
            required: "Обязательное поле",
            validate: (value) => {
              if (getBouquetsByType(value.value, bouquets).length !== 0)
                return "Остались букеты данного вида. Сначала удалите их";
              return true;
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Select
              onChange={onChange}
              options={createOptionListFromTypesList(types)}
              value={value}
              placeholder={"Выберите вид"}
              cn={style.select}
            />
          )}
        />
      </div>
      <div className={style.btns}>
        <ToBack to="/admin" cn={style.to_back} />
        <button
          className={style.btn}
          type="submit"
          disabled={isSubmitted && !isValid}
        >
          Удалить
        </button>
      </div>
    </form>
  );
}

export default RemoveTypeForm;
