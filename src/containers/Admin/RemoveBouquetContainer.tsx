import React, { useState } from "react";
import RemoveBouquetForm from "../../components/Admin/RemoveBouquet/RemoveBouquetForm/RemoveBouquetForm";
import { removeBouquet } from "../../firebase/removeBouquet";
import { useAppSelector } from "../../hooks/useAppSelector";
import { typesBouquet } from "../../MOCK/MOCK";

type State = {
  isLoading: boolean;
  error: any;
};

const initialState: State = {
  isLoading: false,
  error: null,
};

function RemoveBouquetContainer() {
  const { types, bouquets } = useAppSelector((store) => store.bouquets);
  const [state, setState] = useState(initialState);

  const setIsLoading = (value: boolean) =>
    setState((prevState) => ({ ...prevState, isLoading: value }));
  const setError = (err: any) =>
    setState((prevState) => ({ ...prevState, error: err }));
  return (
    <>
      <RemoveBouquetForm
        error={state.error}
        isLoading={state.isLoading}
        setError={setError}
        onSubmit={async (data) => {
          // Проверка по ввиду букета, просто формальность
          // Эта проверка нужна, чтобы не удалить не тот букет
          if (data.name?.value) {
            const name = data.name.value;
            const bouquet = bouquets.find((item) => item.name === name);
            if (bouquet) {
              setIsLoading(true);
              await removeBouquet(bouquet.id, bouquet.image)
                .catch((err) => {
                  console.error(err);
                  setError(err);
                })
                .finally(() => {
                  setIsLoading(false);
                });
            } else console.error("Букет не найден");
          }
        }}
        types={types}
        bouquets={bouquets}
      />
    </>
  );
}

export default RemoveBouquetContainer;
