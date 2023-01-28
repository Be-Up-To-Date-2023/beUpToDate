import React, { useContext, useState } from "react";
import { Orders } from "../hooks/useContextComponent";

const OrdersComponent = () => {
  const [data, setData] = useState("");
  const { orders, addOrder } = useContext(Orders);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ID = Math.floor(Math.random() * 1000);
    addOrder({ id: ID, name: data });
  };

  return (
    <div dir="rtl" className="orders container">
      <form onSubmit={handleSubmit}>
        <label>
          سفارش خود را یادداشت کنید
          <input type="text" onChange={(e) => setData(e.target.value)} />
        </label>
        <button className="btn btn-primary my-2" type="submit">
          ثبت سفارش
        </button>
      </form>
      <ul>
      🛒 سفارشات 🛒
        {orders.map((order) => (
          <li key={order.id}>{order.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersComponent;
