import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { createOptionListFromTypesList } from "../../../../helpers/createOptionListFromTypesList";
import { Bouquet, TId, TypeBouquet } from "../../../../types/types";
import Select from "../../../Form/Select/Select";
import ToBack from "../../../ToBack/ToBack";
import InputFiles from "../../../Form/InputFiles/InputFiles";

import style from "./AddBouquetForm.module.scss";
import InputNum from "../../../Form/InputNum/InputNum";
import PopupBouquet from "../../../Modal/PopupBouquet/PopupBouquet";
type Props = {
  onSubmit: (data: AddBouquetFormState) => void;
  types: TypeBouquet[];
  bouquets: Bouquet[];
};

export type AddBouquetFormState = {
  type: TypeBouquet;
  name: string;
  description: string;
  price: string;
  images: File[];
};

function AddBouquetForm({ onSubmit, types, bouquets }: Props) {
  const {
    control,
    register,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
    reset,
  } = useForm<AddBouquetFormState>({
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

  const toSubmit = (data: AddBouquetFormState) => {
    onSubmit(data);
    reset();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit(toSubmit)}>
      <p className={style.title}>Добавить букет</p>
      <label className={style.field}>
        Название:
        <input
          type="text"
          {...register("name", {
            required: "Обязательное поле",
            validate: (value) => {
              if (bouquets.find((item) => item.name === value))
                return "Букет с таким название уже есть";
              return true;
            },
          })}
        />
      </label>

      <label className={style.field}>
        Описание:
        <textarea
          {...register("description", {
            required: "Обязательное поле",
          })}
        />
      </label>

      <label className={style.field}>
        Цена:
        <Controller
          name="price"
          control={control}
          rules={{
            required: "Обязательное поле",
          }}
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
          rules={{
            required: "Обязательное поле",
          }}
          render={({ field: { onChange, value } }) => (
            <Select
              onChange={onChange}
              options={createOptionListFromTypesList(types)}
              value={value}
              placeholder={"Выберите вид букета"}
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
          rules={{
            required: "Обязательное поле",
          }}
          render={({ field: { onChange, value } }) => (
            <InputFiles text="Выбрать" setFilesData={onChange} />
          )}
        />
      </div>

      <div className={style.preview}>
        <button className={style.btn} onClick={openModal}>
          Предпросмотр
        </button>
        <PopupBouquet
          isOpened={modalIsOpened}
          onClose={closeModal}
          item={{} as Bouquet}
        />
      </div>
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

export default AddBouquetForm;
