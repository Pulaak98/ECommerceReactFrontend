import React, { useContext } from "react";
import { shopContext } from "../Components/Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcum from "../Components/Breadcums/breadcum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

export const Product = () => {
  const { allProduct } = useContext(shopContext);
  const { productId } = useParams();
  const product = allProduct.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcum product={product}/>
      <ProductDisplay product={product}/>
    </div>
  );
};
export default Product;
