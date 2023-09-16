import React, { useState } from "react";
import Order from "../components/Order/Order";
import { createOrderFormData } from "../helpers/createOrderFormData";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { actions } from "../redux/reducers/basket";

type State = {
  isLoading: boolean;
  error: any;
};

const initialState: State = {
  isLoading: false,
  error: null,
};

function OrderContainer() {
  const dispatch = useAppDispatch();
  const bouquetsOrder = useAppSelector((store) => store.basket.bouquets_order);
  const [state, setState] = useState<State>(initialState);

  const setIsLoading = (value: boolean) => {
    setState((prevState) => ({ ...prevState, isLoading: value }));
  };

  const setError = (value: any) => {
    setState((prevState) => ({ ...prevState, error: value }));
  };
  return (
    <>
      <Order
        bouquetsOrder={bouquetsOrder}
        isLoading={state.isLoading}
        error={state.error}
        setErrorRes={setError}
        onSubmit={async (data) => {
          setIsLoading(true);
          await fetch("../../order.php", {
            method: "POST",
            body: createOrderFormData(data),
          })
            .then(() => {
              const keys = Object.keys(bouquetsOrder);
              for (let key of keys) {
                dispatch(actions.removeBouquetOrder(key));
              }
            })
            .catch((err) => {
              setError(err);
              console.error(err);
            })
            .finally(() => {
              setIsLoading(false);
            });
        }}
      />
    </>
  );
}

export default OrderContainer;
