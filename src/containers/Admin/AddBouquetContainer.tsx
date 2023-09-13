import React, { useState } from "react";
import AddBouquetForm from "../../components/Admin/AddBouquet/AddBouquetForm/AddBouquetForm";
import { addBouquet } from "../../firebase/addBouquet";
import { addImage } from "../../firebase/addImage";
import { createBouquet } from "../../firebase/createBouquet";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Bouquet } from "../../types/types";

type State = {
  isLoading: boolean;
  error: any;
};

const initialState: State = {
  isLoading: false,
  error: null,
};

function AddBouquetContainer() {
  const { types, bouquets } = useAppSelector((store) => store.bouquets);
  const [state, setState] = useState(initialState);
  // сначала нужно дождаться загрузки картинок, и только потом создавать букет

  const setIsLoading = (value: boolean) =>
    setState((prevState) => ({ ...prevState, isLoading: value }));
  const setError = (err: any) =>
    setState((prevState) => ({ ...prevState, error: err }));

  return (
    <>
      <AddBouquetForm
        onSubmit={async (data) => {
          setIsLoading(true);
          await createBouquet(data)
            .catch((err) => {
              console.error(err);
              setError(err);
            })
            .finally(() => {
              setIsLoading(false);
            });
        }}
        types={types}
        bouquets={bouquets}
        isLoading={state.isLoading}
        error={state.error}
        setError={setError}
      />
    </>
  );
}

export default AddBouquetContainer;
