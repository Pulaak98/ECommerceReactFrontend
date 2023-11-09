import React, { useContext } from "react";
import "./ProductDisplay.css";
import starImage from "../Assets/star_icon.png";
import dullStarImage from "../Assets/star_dull_icon.png";
import { shopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const {AddToCart}=useContext(shopContext)

  return (
    <div className="product-display">
      <div className="display-left">
        <div className="display-img-list">
          <img
            src={product.image}
            alt=""
          />
          <img
            src={product.image}
            alt=""
          />
          <img
            src={product.image}
            alt=""
          />
          <img
            src={product.image}
            alt=""
          />
        </div>
        <div className="dispaly-img">
          <img
            className="dispaly-main-img"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="display-right">
        <h1>{product.name}</h1>
        <div className="display-right-star">
          <img
            src={starImage}
            alt=""
          />
          <img
            src={starImage}
            alt=""
          />
          <img
            src={starImage}
            alt=""
          />
          <img
            src={starImage}
            alt=""
          />
          <img
            src={dullStarImage}
            alt=""
          />
          <p>(122)</p>
        </div>
        <div className="display-right-prices">
          <div className="old-price">${product.old_price}</div>
          <div className="new-price">${product.new_price}</div>
        </div>
        <div className="display-right-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore recusandae quibusdam eaque temporibus. Officia, perspiciatis.
        </div>
        <div className="display-right-size">
            <h1>select size</h1>
            <div className="sizes">
                <div>s</div>
                <div>m</div>
                <div>l</div>
                <div>xL</div>
                <div>xXL</div>
            </div>
        </div>
        <button onClick={()=>{AddToCart(Number(product.id))}}>add to cart</button>
        <p className="display-right-category"><span>category:</span>women,t-shirt,crop top</p>
        <p className="display-right-category"><span>Tags:</span>modern,latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
