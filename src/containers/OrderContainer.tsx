import React, { useState } from "react";
import Order from "../components/Order/Order";
import { useAppSelector } from "../hooks/useAppSelector";

type State = {
  isLoading: boolean;
  error: any;
};

const initialState: State = {
  isLoading: false,
  error: null,
};

function OrderContainer() {
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
        onSubmit={async (data) => {
          setIsLoading(true);
          await fetch("order.php", {
            method: "POST",
            body: new FormData(),
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
