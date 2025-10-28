import React from "react";

function Stock({ stock, onClick }) {
  return (
    <div className="card" onClick={() => onClick(stock)}>
      <div className="card-body">
        <h5>{stock.name}</h5>
        <p>{stock.ticker}</p>
        <p>{stock.type}</p>
        <p>{stock.price}</p>
      </div>
    </div>
  );
}

export default Stock;
