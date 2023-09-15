import React from "react";
import { useNavigate } from "react-router-dom";
import OrderContainer from "../containers/OrderContainer";

function Basket() {
  const navigate = useNavigate();

  return <OrderContainer />;
}

export default Basket;
