import { useState, useEffect } from "react";
import React from "react";


const ItemCount = ({ stock = 100, initial = 0 }) => {
  const [add, setAdd] = useState(0);

  useEffect(() => {
    setAdd(1);
  }, []);

  const increment = () => {
    if (add < stock) {
      setAdd(add + 1);
    }
  }

  const decrement = () => {
    if (add > initial) {
      setAdd(add - 1);
    }
  }
  return (
    <>
      <div className="d-flex">
        <button className="btn btn-dark" onClick={increment}>+</button>
        <div className="">{add}</div>
        <button className="btn btn-dark" onClick={decrement}>-</button>
      </div>
    </>
  );
}

export default ItemCount;



