import React from "react";
import { Controller, useForm } from "react-hook-form";
import { createOptionListFromTypesList } from "../../../../helpers/createOptionListFromTypesList";
import { Bouquet, TypeBouquet } from "../../../../types/types";
import ErrorAlert from "../../../Alert/ErrorAlert/ErrorAlert";
import Select, { IOptionSelect } from "../../../Form/Select/Select";
import Loader from "../../../Loader/Loader";
import ToBack from "../../../ToBack/ToBack";
import style from "./RemoveBouquetForm.module.scss";

type Props = {
  onSubmit: (data: FormState) => void;
  types: TypeBouquet[];
  bouquets: Bouquet[];
  error: any;
  isLoading: boolean;
  setError: (value: any) => void;
};

type FormState = {
  type: TypeBouquet;
  name: IOptionSelect | null;
};

const createOptionListFromBouquets = (list: Bouquet[], type: string) => {
  const res: IOptionSelect[] = [];

  if (type)
    for (let item of list) {
      if (item.type === type)
        res.push({
          id: item.id,
          value: item.name,
        });
    }
  return res;
};

function RemoveBouquetForm({
  onSubmit,
  types,
  bouquets,
  error,
  isLoading,
  setError,
}: Props) {
  const {
    control,
    register,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
    reset,
    getValues,
    trigger,
    setValue,
  } = useForm<FormState>({
    defaultValues: {
      type: undefined,
      name: undefined,
    },
    mode: "onSubmit",
  });

  const toSubmit = (data: FormState) => {
    onSubmit(data);
    reset();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit(toSubmit)}>
      <p className={style.title}>Удалить букет</p>
      <div className={style.field}>
        <p className={style.field_title}>Вид:</p>
        <Controller
          name="type"
          control={control}
          rules={{
            required: "Обязательное поле",
          }}
          render={({ field: { onChange, value } }) => (
            <Select
              onChange={(value) => {
                setValue("name", null);
                onChange(value);
                trigger();
              }}
              options={createOptionListFromTypesList(types)}
              value={value}
              placeholder={"Вид букета"}
              cn={style.select}
            />
          )}
        />
      </div>
      {errors.type?.type === "required" && (
        <ErrorAlert title={errors.type.message || ""} />
      )}

      <div className={style.field}>
        <p className={style.field_title}>Название:</p>
        <Controller
          name="name"
          control={control}
          rules={{
            required: "Обязательное поле",
          }}
          render={({ field: { onChange, value } }) => (
            <Select
              onChange={onChange}
              options={createOptionListFromBouquets(
                bouquets,
                getValues("type.value")
              )}
              value={value}
              placeholder={"Название букета"}
              cn={style.select}
            />
          )}
        />
      </div>
      {errors.name?.type === "required" && (
        <ErrorAlert title={errors.name.message || ""} />
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

export default RemoveBouquetForm;
