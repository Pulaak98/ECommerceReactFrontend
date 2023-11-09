import React from "react";
import "./NewCollection.css";
import newCollection from "../Assets/new_collections";
import Item from "../Items/Item";

const NewCollection = () => {
  return (
    <div className="new-collection">
      <h1>new collection</h1>
      <hr />
      <div className="collections">
        {newCollection.map((item, i) => {
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

export default NewCollection;
