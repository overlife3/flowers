import React from "react";
import { Controller, useForm } from "react-hook-form";
import { createOptionListFromTypesList } from "../../../../helpers/createOptionListFromTypesList";
import { getBouquetsByType } from "../../../../helpers/getBouquetsByType";
import { typesBouquet } from "../../../../MOCK/MOCK";
import { Bouquet, TId, TypeBouquet } from "../../../../types/types";
import ErrorAlert from "../../../Alert/ErrorAlert/ErrorAlert";
import Select from "../../../Form/Select/Select";
import Loader from "../../../Loader/Loader";
import ToBack from "../../../ToBack/ToBack";
import style from "./RemoveTypeForm.module.scss";

type FormState = {
  type: TypeBouquet;
};

type Props = {
  error: any;
  isLoading: boolean;
  setError: (value: any) => void;
  bouquets: Bouquet[];
  types: TypeBouquet[];
  onSubmit: (data: FormState) => void;
};

function RemoveTypeForm({
  onSubmit,
  types,
  bouquets,
  error,
  isLoading,
  setError,
}: Props) {
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
                return `Остались букеты вида "${value.value}". Сначала удалите их`;
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
      {errors.type?.type === "required" && (
        <ErrorAlert title={errors.type.message || ""} />
      )}
      {errors.type?.type === "validate" && (
        <ErrorAlert title={errors.type.message || ""} />
      )}
      <div className={style.btns}>
        <ToBack to="/admin" cn={style.to_back} />
        <div className={style.button_container}>
          {isLoading && <Loader />}
          <button
            className={style.btn}
            type="submit"
            disabled={isSubmitted && !isValid}
          >
            Удалить
          </button>
        </div>
      </div>
      {error && (
        <ErrorAlert
          title="Произошла ошибка"
          desc="Попробуйте снова"
          onClick={() => setError(null)}
        />
      )}
    </form>
  );
}

export default RemoveTypeForm;
