import React from "react";
import "./Popular.css";
import dataProduct from "../Assets/data";
import Item from "../Items/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h1>popular in women</h1>
      <hr />
      <div className="popular-item">
        {dataProduct.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              newPrice={item.new_price}
              oldPrice={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
