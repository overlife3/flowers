import React, { useState } from "react";
import RemoveTypeForm from "../../components/Admin/RemoveType/RemoveTypeForm/RemoveTypeForm";
import { removeTypeBouquet } from "../../firebase/removeTypeBouquet";
import { useAppSelector } from "../../hooks/useAppSelector";

type State = {
  isLoading: boolean;
  error: any;
};

const initialState: State = {
  isLoading: false,
  error: null,
};

function RemoveTypeContainers() {
  const { types, bouquets } = useAppSelector((store) => store.bouquets);
  const [state, setState] = useState(initialState);

  const setIsLoading = (value: boolean) =>
    setState((prevState) => ({ ...prevState, isLoading: value }));
  const setError = (err: any) =>
    setState((prevState) => ({ ...prevState, error: err }));

  return (
    <RemoveTypeForm
      error={state.error}
      isLoading={state.isLoading}
      setError={setError}
      onSubmit={async (data) => {
        setIsLoading(true);
        const id = data.type.id;

        await removeTypeBouquet(id)
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
    />
  );
}

export default RemoveTypeContainers;
