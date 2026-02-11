import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthContext";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:3002/allOrders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllOrders(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>Loading orders...</p>
        </div>
      </div>
    );
  }

  if (allOrders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <h3 className="title">Orders ({allOrders.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Instrument</th>
              <th>Type</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => {
              const total = order.qty * order.price;
              const isBuy = order.mode === "BUY";
              const orderClass = isBuy ? "buy-order" : "sell-order";
              
              return (
                <tr key={index}>
                  <td>
                    {order.createdAt
                      ? new Date(order.createdAt).toLocaleTimeString()
                      : "N/A"}
                  </td>
                  <td>{order.name}</td>
                  <td>
                    <span className={orderClass}>{order.mode}</span>
                  </td>
                  <td>{order.qty}</td>
                  <td>₹{order.price.toFixed(2)}</td>
                  <td>₹{total.toFixed(2)}</td>
                  <td>
                    <span className="status-completed">Completed</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
