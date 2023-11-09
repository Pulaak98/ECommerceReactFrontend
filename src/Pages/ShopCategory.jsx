import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { shopContext } from "../Components/Context/ShopContext";
import dropdownIcon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Items/Item";

const ShopCategory = (props) => {
  const { allProduct } = useContext(shopContext);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner"
        src={props.banner}
        alt=""
      />
      <div className="shopcategory-indexSort">
        <p>
          <span>showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by{" "}
          <img
            src={dropdownIcon}
            alt=""
          />
        </div>
      </div>
      <div className="shopcategory-products">
        {allProduct.map((item, i) => {
          if (item.category===props.category) {
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
          } else return null;
        })}
      </div>
      <div className="shopcategory-loadmore">
        explore more
      </div>
    </div>
  );
};

export default ShopCategory;
