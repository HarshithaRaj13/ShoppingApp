import React from "react";
import { PRODUCTS } from "../../Product";
import { Products } from "./Products";
import "./Shop.css";

export const Shop = () => {
  return (
    <div className="Shop">
      <div className="shopTitle">
        <h1>
          <b>Rolex Pro Zeal </b>
        </h1>
      </div>
      <div className="products">
        {PRODUCTS.map((products) => (
          <Products key={products.id} data={products} />
        ))}
      </div>
    </div>
  );
};
