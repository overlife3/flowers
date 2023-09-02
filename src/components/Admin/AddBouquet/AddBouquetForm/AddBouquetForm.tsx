import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { createOptionListFromTypesList } from "../../../../helpers/createOptionListFromTypesList";
import { TId, TypeBouquet } from "../../../../types/types";
import Select from "../../../Form/Select/Select";
import ToBack from "../../../ToBack/ToBack";
import InputFiles from "../../../Form/InputFiles/InputFiles";

import style from "./AddBouquetForm.module.scss";
import InputNum from "../../../Form/InputNum/InputNum";
import PopupBouquet from "../../../Modal/PopupBouquet/PopupBouquet";
type Props = {
  onSubmit: () => void;
  typesBouquet: TypeBouquet[];
};

type FormState = {
  type: TypeBouquet;
  name: string;
  description: string;
  price: string;
  images: File[];
};

function AddBouquetForm({ onSubmit, typesBouquet }: Props) {
  const {
    control,
    register,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
  } = useForm<FormState>({
    defaultValues: {
      type: undefined,
      name: "",
      description: "",
      price: "",
      images: undefined,
    },
    mode: "onSubmit",
  });

  const [modalIsOpened, setModalIsOpened] = useState(false);

  const closeModal = () => {
    setModalIsOpened(false);
  };
  const openModal = () => {
    setModalIsOpened(true);
  };
  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={style.title}>Добавить букет</p>
      <label className={style.field}>
        Название:
        <input type="text" {...register("name")} />
      </label>

      <label className={style.field}>
        Описание:
        <textarea {...register("description")} />
      </label>

      <label className={style.field}>
        Цена:
        <Controller
          name="price"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputNum onChange={onChange} value={value} />
          )}
        />
      </label>

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

      <div className={style.field}>
        <p className={style.field_title}>Фотографии:</p>
        <Controller
          name="images"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputFiles text="Выбрать" setFilesData={onChange} />
          )}
        />
      </div>

      <div className={style.preview}>
        <button className={style.btn} onClick={openModal}>
          Предпросмотр
        </button>
        <PopupBouquet isOpened={modalIsOpened} onClose={closeModal} />
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

export default AddBouquetForm;
