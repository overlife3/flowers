import React from "react";
import { useForm } from "react-hook-form";
import style from "./Auth.module.scss";
import { Auth as AuthType } from "../../../types/types";
import ToBack from "../../ToBack/ToBack";
import Loader from "../../Loader/Loader";
import ErrorAlert from "../../Alert/ErrorAlert/ErrorAlert";
import ErrorsLogin from "../../ErrorsLogin/ErrorsLogin";

type Props = {
  onSubmit: (data: AuthType) => void;
  error: any;
  isLoading: boolean;
  setError: (value: any) => void;
};

type FormState = AuthType;

function Auth({ onSubmit, error, isLoading, setError }: Props) {
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
        Для входа на страницу администратора
        <br></br>
        <span className={style.bold}>Введите пароль</span>
      </p>
      <label className={style.field}>
        Пароль:
        <input
          type="text"
          {...register("password", {
            required: "Обязательное поле",
          })}
        />
      </label>
      {errors.password?.type === "required" && (
        <ErrorAlert title={errors.password.message || ""} />
      )}
      <div className={style.btns}>
        <ToBack to="/" cn={style.to_back} />
        <div className={style.button_container}>
          {isLoading && <Loader />}
          <button
            className={style.btn}
            type="submit"
            disabled={isSubmitted && !isValid}
          >
            Войти
          </button>
        </div>
      </div>

      {error && <ErrorsLogin message={error.message} setError={setError} />}
    </form>
  );
}

export default Auth;
