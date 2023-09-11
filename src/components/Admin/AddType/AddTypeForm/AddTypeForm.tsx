import React from "react";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import ToBack from "../../../ToBack/ToBack";
import style from "./AddTypeForm.module.scss";

type Props = {
  onSubmit: (data: FormState) => void;
};

type FormState = {
  type: string;
};
function AddTypeForm({ onSubmit }: Props) {
  const types = useAppSelector((store) => store.bouquets.types);
  const {
    register,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
    reset,
  } = useForm<FormState>({
    defaultValues: {
      type: "",
    },
    mode: "onSubmit",
  });

  const toSubmit = (data: FormState) => {
    onSubmit(data);
    reset();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit(toSubmit)}>
      <p className={style.title}>Добавить вид букета</p>
      <label className={style.field}>
        Название:
        <input
          type="text"
          {...register("type", {
            required: "Обязательное поле",
            validate: (value) => {
              if (types.find((item) => item.value === value))
                return "Такой вид уже есть";
              return true;
            },
          })}
        />
      </label>
      <div className={style.btns}>
        <ToBack to="/admin" cn={style.to_back} />
        <button
          className={style.btn}
          type="submit"
          disabled={isSubmitted && !isValid}
        >
          Добавить
        </button>
      </div>
    </form>
  );
}

export default AddTypeForm;
