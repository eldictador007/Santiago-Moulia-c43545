import React, { useState, useEffect } from "react";
import Badge from "react-bootstrap/Badge";

const Counter = ({ stock = 2, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const substract = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };
  const handleOnAdd = () => {
    onAdd(count);
  };
  return (
    <div className="container">
      <button className="btn bg-warning p-2 m-3 fw-bolder" onClick={substract}>
        {" "}
        -{" "}
      </button>
      <Badge id="counter" bg="dark" pill="true" text="light">
        {count}
      </Badge>
      <button className="btn bg-success p-2 m-3 fw-bolder" onClick={add}>
        {" "}
        +{" "}
      </button>
      <br></br>
      <button className="btn bg-info p-3 m-5 fw-bolder" onClick={handleOnAdd}>
        Agregar al Carrito
      </button>
    </div>
  );
};
export default Counter;
