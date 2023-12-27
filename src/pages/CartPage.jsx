import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../components/cards/CartProvider";
import { Avatar, Button, Space } from "antd";
import { MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const CartPage = () => {
  const { cartItems, updateCart } = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    updateCart(updatedCart);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    updateCart(updatedCart);
  };

  const handleConfirmOrder = () => {
    // اضافة تنفيذ الامر لاحقا
    console.log("Order confirmed!");
  };

  const handleCancelOrder = () => {
    // اضافة تنفيذ الامر لاحقا
    console.log("Order canceled!");
  };

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalAmount(total);
  };

  return (
    <div className="cart-page">
      <h2> Fast Food Shopping</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <Avatar src={item.imgSrc} size={64} />
          <div className="item-details">
            <p className="item-name">{item.name}</p>
            <p className="item-price">${item.price}</p>
            <div className="quantity-controls">
              <span
                className="quantity-btn"
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
              >
                -
              </span>
              <span className="quantity">{item.quantity}</span>
              <span
                className="quantity-btn"
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              >
                +
              </span>
            </div>
            <span
              className="remove-btn"
              onClick={() => handleRemoveItem(item.id)}
            >
              <DeleteOutlined />
            </span>
          </div>
        </div>
      ))}
      <div className="total-section">
        <Space align="end">
          <p className="total-text">Total:</p>
          <p className="total-amount">${totalAmount.toFixed(2)}</p>
        </Space>
      </div>
      <div className="button-section">
        <Button type="primary" onClick={handleConfirmOrder}>
          Confirm Order
        </Button>
        <Button type="danger" onClick={handleCancelOrder}>
          Cancel Order
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
