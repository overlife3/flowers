import React from "react";
import { useForm } from "react-hook-form";
import style from "./Auth.module.scss";
import { Auth as AuthType } from "../../../types/types";

type Props = {
  onSubmit: () => void;
};

type FormState = AuthType;

function Auth({ onSubmit }: Props) {
  const {
    register,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
  } = useForm<FormState>({
    defaultValues: {
      password: "",
    },
    mode: "onSubmit",
  });
  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={style.title}>
        Для входа в страницу администратора
        <br></br>
        <span className={style.bold}>Введите пароль</span>
      </p>
      <label className={style.field}>
        Пароль:
        <input type="text" {...register("password")} />
      </label>
    </form>
  );
}

export default Auth;
