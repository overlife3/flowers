import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { createMakeFormData } from "../../helpers/createMakeFormData";
import ErrorAlert from "../Alert/ErrorAlert/ErrorAlert";
import InputPhone from "../Form/InputPhone/InputPhone";
import Loader from "../Loader/Loader";
import style from "./MakeBouquet.module.scss";

export type FormState = {
  name: string;
  phone: string;
};

type State = {
  isLoading: boolean;
  error: any;
};

const initialState: State = {
  isLoading: false,
  error: null,
};

function MakeBouquet() {
  const {
    control,
    register,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
    reset,
  } = useForm<FormState>({
    defaultValues: {
      name: "",
      phone: "",
    },
    mode: "onSubmit",
  });

  const [state, setState] = useState<State>(initialState);

  const setIsLoading = (value: boolean) => {
    setState((prevState) => ({ ...prevState, isLoading: value }));
  };

  const setError = (value: any) => {
    setState((prevState) => ({ ...prevState, error: value }));
  };

  const onSubmit = async (data: FormState) => {
    setIsLoading(true);
    await fetch("../../make.php", {
      method: "POST",
      body: createMakeFormData(data),
    })
      .then(() => {
        reset();
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.container}>
        <div className={style.field}>
          <input
            type="text"
            className={style.name}
            placeholder="Как вас зовут?"
            {...register("name", {
              required: "Обязательное поле",
            })}
          />
          {errors.name && <ErrorAlert title={errors.name.message || ""} />}
        </div>
        <div className={style.field}>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Обязательное поле",
              validate: (value) => {
                const reg = /^\+?[1-9][0-9]{10,14}$/;
                if (reg.test(value)) return true;
                return "Неправильно введен номер";
              },
            }}
            render={({ field: { onChange, value } }) => (
              <InputPhone value={value} onChange={onChange} />
            )}
          />
          {errors.phone && <ErrorAlert title={errors.phone.message || ""} />}
        </div>

        <div className={style.submit_container}>
          {state.isLoading && <Loader />}
          <input type="submit" className={style.submit} />
        </div>
      </div>

      {state.error && (
        <ErrorAlert
          cn={style.alert_error}
          title="Произошла ошибка"
          desc="Повторите еще раз"
          onClick={() => setError(null)}
        />
      )}
      <p className={style.politics}>
        Отправляя заказ, вы соглашаетесь с{" "}
        <Link to={"/politics"}>политикой конфиденциальности</Link>
      </p>
    </form>
  );
}

export default MakeBouquet;
