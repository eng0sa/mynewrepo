import React, { useState, useContext } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (item) => {
      // تحقق مما إذا كان العنصر موجود بالفعل في السلة
      const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
      if (existingItem) {
        // إذا كان العنصر موجود، قم بتحديث كميته في السلة
        setCartItems((prevItems) =>
          prevItems.map((prevItem) =>
            prevItem.id === existingItem.id ? { ...prevItem, quantity: prevItem.quantity + 1 } : prevItem
          )
        );
      } else {
        // إذا لم يكن العنصر موجود، قم بإضافته إلى السلة
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
      }
    };
  
    // ... (الكود اللازم للحذف وتغيير الكمية)
    const updateCart = (newCart) => {
      setCartItems(newCart);
    };
    return (
      <CartContext.Provider value={{ cartItems, addToCart  ,updateCart }}>
        {children}
      </CartContext.Provider>
    );
  };
