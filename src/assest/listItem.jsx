// menuItems.js
import {
    AppstoreOutlined,
    ShopOutlined,
    MenuOutlined ,
    UserOutlined,
  } from "@ant-design/icons";
  
  const menuItems = [
    {
      label: "Dashbaord",
      icon: <AppstoreOutlined />,
      key: "/",
    },
    {
      label: "Inventory",
      key: "/inventory",
      icon: <ShopOutlined />,
    },
    {
      label: "Menu",
      key: "/Menu",
      icon: <MenuOutlined  />,
      
    },
    {
      label: "Customers",
      key: "/customers",
      icon: <UserOutlined />,
    },
  ];
 
  
  export default menuItems;
  