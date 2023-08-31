import React from "react";
import { useNavigate } from "react-router-dom";
import Order from "../components/Order/Order";
import ToBack from "../components/ToBack/ToBack";
import Header from "../layouts/Header/Header";

function Basket() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <Order />
    </>
  );
}

export default Basket;
