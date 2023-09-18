import React, { useState } from "react";
import { Controller, useForm, ErrorOption } from "react-hook-form";
import { createOptionListFromTypesList } from "../../../../helpers/createOptionListFromTypesList";
import { Bouquet, FileData, TId, TypeBouquet } from "../../../../types/types";
import Select from "../../../Form/Select/Select";
import ToBack from "../../../ToBack/ToBack";
import InputFiles from "../../../Form/InputFiles/InputFiles";

import style from "./AddBouquetForm.module.scss";
import InputNum from "../../../Form/InputNum/InputNum";
import PopupBouquet from "../../../Modal/PopupBouquet/PopupBouquet";
import ErrorAlert from "../../../Alert/ErrorAlert/ErrorAlert";
import Loader from "../../../Loader/Loader";
import { getValue } from "@testing-library/user-event/dist/utils";
import { getImagesFileData } from "../../../../helpers/getImagesFileData";
type Props = {
  onSubmit: (data: AddBouquetFormState) => void;
  types: TypeBouquet[];
  bouquets: Bouquet[];
  isLoading: boolean;
  error: any;
  setError: (err: any) => void;
};

export type AddBouquetFormState = {
  type: TypeBouquet;
  name: string;
  description: string;
  price: string;
  images: File[];
};

function AddBouquetForm({
  onSubmit,
  types,
  bouquets,
  isLoading,
  error,
  setError,
}: Props) {
  const {
    control,
    register,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
    reset,
    getValues,
    setError: setErrorForm,
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
  const [imagesPath, setImagesPath] = useState<string[] | null>(null); // сюда класть пути к картинкам
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

  const openPreview = async () => {
    await getImagesFileData(getValues("images"))
      .then((res) => {
        const imagesSrc = res.map((item) => item.src);
        setImagesPath(imagesSrc);
        openModal();
      })
      .catch((err) => {
        console.error(err);
        setErrorForm("images", {
          type: "validate",
          message: "Ошибка загрузки изображений",
        });
      });
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
      {errors.name?.type === "required" && (
        <ErrorAlert title={errors.name.message || ""} />
      )}
      {errors.name?.type === "validate" && (
        <ErrorAlert title={errors.name.message || ""} />
      )}

      <label className={style.field}>
        Описание:
        <textarea
          {...register("description", {
            required: "Обязательное поле",
          })}
        />
      </label>
      {errors.description?.type === "required" && (
        <ErrorAlert title={errors.description.message || ""} />
      )}
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
      {errors.price?.type === "required" && (
        <ErrorAlert title={errors.price.message || ""} />
      )}

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
      {errors.type?.type === "required" && (
        <ErrorAlert title={errors.type.message || ""} />
      )}

      <div className={style.field}>
        <p className={style.field_title}>Фотографии:</p>
        <Controller
          name="images"
          control={control}
          rules={{
            required: "Обязательное поле",
          }}
          render={({ field: { onChange, value } }) => (
            <InputFiles
              text="Выбрать"
              setFilesData={onChange}
              accept="image/png, image/gif, image/jpeg"
            />
          )}
        />
      </div>
      {errors.images?.type === "required" && (
        <ErrorAlert title={errors.images.message || ""} />
      )}

      <div className={style.preview}>
        <button
          type="button"
          className={style.btn}
          onClick={openPreview}
          disabled={!isValid}
        >
          Предпросмотр
        </button>

        <PopupBouquet
          isOpened={modalIsOpened}
          onClose={closeModal}
          buttonDisabled
          item={{
            id: "",
            name: getValues("name"),
            description: getValues("description"),
            image: imagesPath || [],
            price: getValues("price"),
            type: getValues("type")?.value || "",
          }}
        />
      </div>
      {errors.images?.type && (
        <ErrorAlert
          title="Произошла ошибка"
          desc={errors.images.message || ""}
          onClick={() => setErrorForm("images", {})}
        />
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
            Добавить
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

export default AddBouquetForm;
