import React, { useState } from "react";
import AddTypeForm from "../../components/Admin/AddType/AddTypeForm/AddTypeForm";
import { addTypeBouquet } from "../../firebase/addTypeBouquet";

type State = {
  isLoading: boolean;
  error: any;
};

const initialState: State = {
  isLoading: false,
  error: null,
};

function AddTypeContainer() {
  const [state, setState] = useState(initialState);

  const setIsLoading = (value: boolean) =>
    setState((prevState) => ({ ...prevState, isLoading: value }));
  const setError = (err: any) =>
    setState((prevState) => ({ ...prevState, error: err }));

  return (
    <>
      <AddTypeForm
        error={state.error}
        isLoading={state.isLoading}
        setError={setError}
        onSubmit={async (data) => {
          setIsLoading(true);
          const type = data.type;

          await addTypeBouquet(type)
            .catch((err) => {
              console.error(err);
              setError(err);
            })
            .finally(() => {
              setIsLoading(false);
            });
        }}
      />
    </>
  );
}

export default AddTypeContainer;
