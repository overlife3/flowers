import { Controller, useForm } from "react-hook-form";
import InputPhone from "../Form/InputPhone/InputPhone";
import style from "./MakeBouquet.module.scss";

type FormState = {
  name: string;
  phone: string;
};

function MakeBouquet() {
  const {
    control,
    register,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
  } = useForm<FormState>({
    defaultValues: {
      name: "",
      phone: "",
    },
    mode: "onSubmit",
  });
  return (
    <form className={style.form}>
      <input type="text" className={style.name} placeholder="Как вас зовут?" />
      <Controller
        name="phone"
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputPhone value={value} onChange={onChange} />
        )}
      />
      <input type="submit" className={style.submit} />
    </form>
  );
}

export default MakeBouquet;
