import { createContext, useState } from "react";

export const Orders = createContext();

const Ordersprovider = (props) => {
  const [orders, setIOrders] = useState([{ id: 1, name: "سیب" }]);
  const { children } = props;

  const value = {
    orders,
    addOrder: (item) => setIOrders([...orders, item]),
  };

  return <Orders.Provider value={value}>{children}</Orders.Provider>;
};

export default Ordersprovider;
