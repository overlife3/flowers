import React from "react";
import Order from "../components/Order/Order";
import { useAppSelector } from "../hooks/useAppSelector";

function OrderContainer() {
  const bouquetsOrder = useAppSelector((store) => store.basket.bouquets_order);

  return (
    <>
      <Order bouquetsOrder={bouquetsOrder} />
    </>
  );
}

export default OrderContainer;
