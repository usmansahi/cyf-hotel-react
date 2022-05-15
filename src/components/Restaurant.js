import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="resturentMenu">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="pizza" />
        <Order orderType="Salad" />
        <Order orderType="Chocolate" />
      </ul>
    </div>
  );
};

export default Restaurant;
