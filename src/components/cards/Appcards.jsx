// AppCards.js
import React, { useContext } from "react";
import { Button } from "antd";
import { cartItems } from "../../assest/MenuItems";
import { CartContext } from "./CartProvider";



const AppCards = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="cart">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.imgSrc} alt={item.name} />
          <h3>{item.name}</h3>
          <p className="ratings">Ratings: {item.ratings}</p>
          <p className="price">${item.price}</p>
          <Button
            type="primary"
            className="add-to-cart-btn"
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </Button>
        </div>
      ))}
    </div>
  );
};



export default AppCards;
