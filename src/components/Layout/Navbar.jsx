// AppNav.js
import React, { useContext, useState } from "react";
import { Avatar, Badge, Drawer, Space, Typography } from "antd";
import { ShoppingCartOutlined, MailOutlined, BellFilled } from "@ant-design/icons";
import { CartContext } from "../cards/CartProvider";
import AppNotificationsDrawer from "./Drawer/AppNotificationsDrawer";
import AppCommentsDrawer from "./Drawer/AppCommentsDrawer";
import CartPage from "../../pages/CartPage"; // تأكد من استيراد CartPage

const AppNav = () => {
  const { cartItems } = useContext(CartContext);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartClick = () => {
    setCartOpen(true);
  };

  return (
    <div className="AppHeader">
      <Avatar src={require("../../assest/images/burger1.jpg")} />
      <Typography.Title>Fast Food</Typography.Title>
      <Space>
      <Badge>
        <ShoppingCartOutlined style={{ fontSize: 28 }} onClick={handleCartClick} />
        <p>{cartItems.length}</p>
      </Badge>
        <Badge>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        </Badge>
      </Space>
      <Drawer
        title="Shopping Cart"
        placement="right"
        onClose={() => setCartOpen(false)}
        visible={cartOpen}
      >
        <CartPage />
      </Drawer>
      <AppCommentsDrawer visible={commentsOpen} onClose={() => setCommentsOpen(false)} />
      <AppNotificationsDrawer visible={notificationsOpen} onClose={() => setNotificationsOpen(false)} />
    </div>
  );
};

export default AppNav;
