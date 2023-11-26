import React, { createContext, useState } from "react";
import allProduct from "../Assets/all_product";

export const shopContext = createContext(null);

const GetDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < allProduct.length+1; index++) {
    cart[index] = 0;
  }
  retun cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(GetDefaultCart());
  
  const AddToCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  }
  const RemoveFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
  
  const contextValue = { allProduct, cartItems ,AddToCart,RemoveFromCart};
  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
