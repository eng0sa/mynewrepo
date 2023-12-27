import { Route, Routes } from "react-router-dom";
import Dashboard from "../src/pages/Dashbaord";
import Customers from "../src/pages/Customers";
import Inventory from "../src/pages/Orders";
import Orders from "../src/pages/Inventory";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
    </Routes>
  );
}
export default AppRoutes;