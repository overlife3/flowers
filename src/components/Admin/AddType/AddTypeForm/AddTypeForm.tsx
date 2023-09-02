import React from "react";
import { useForm } from "react-hook-form";
import ToBack from "../../../ToBack/ToBack";
import style from "./AddTypeForm.module.scss";
type Props = {
  onSubmit: () => void;
};

type FormState = {
  type: string;
};
function AddTypeForm({ onSubmit }: Props) {
  const {
    register,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
  } = useForm<FormState>({
    defaultValues: {
      type: "",
    },
    mode: "onSubmit",
  });
  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={style.title}>Введите название нового вида букетов</p>
      <label className={style.field}>
        Название:
        <input type="text" {...register("type")} />
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

export default AddTypeForm;
