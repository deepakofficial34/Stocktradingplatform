import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { useAuth } from "./AuthContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ stock }) => {
  const { closeBuyWindow } = useContext(GeneralContext);
  const { token } = useAuth();
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(stock?.price || 0.0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [existingHolding, setExistingHolding] = useState(null);

  useEffect(() => {
    // Set market price automatically when component mounts
    if (stock?.price) {
      setStockPrice(stock.price);
    }
  }, [stock]);

  useEffect(() => {
    // Fetch user's existing holdings for this stock
    if (token && stock?.name) {
      axios
        .get("http://localhost:3002/allHoldings", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const holding = res.data.find((h) => h.name === stock.name);
          if (holding) {
            setExistingHolding(holding);
          }
        })
        .catch((err) => {
          console.error("Error fetching holdings:", err);
        });
    }
  }, [token, stock]);

  const handleBuyClick = async () => {
    setError("");
    
    if (!stockQuantity || stockQuantity <= 0) {
      setError("Please enter a valid quantity");
      return;
    }
    
    if (!stockPrice || stockPrice <= 0) {
      setError("Please enter a valid price");
      return;
    }

    const totalCost = stockQuantity * stockPrice;
    
    // Note: In a real app, you'd check available funds here
    // For now, we'll just validate the order

    setLoading(true);
    try {
      const response =       await axios.post(
        "http://localhost:3002/newOrder",
        {
          name: stock.name,
          qty: parseInt(stockQuantity),
          price: parseFloat(stockPrice),
          mode: "BUY",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Buy order executed successfully!");
      closeBuyWindow();
      // Reload page to update holdings
      window.location.reload();
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error placing order. Please try again.";
      setError(errorMessage);
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  const totalAmount = stockQuantity * stockPrice;

  return (
    <>
      <div className="modal-backdrop" onClick={handleCancelClick}></div>
      <div className="container" id="buy-window" draggable="true">
      <div className="order-header">
        <h3>Buy {stock?.name}</h3>
        <button className="close-btn" onClick={handleCancelClick}>×</button>
      </div>
      <div className="regular-order">
        {error && (
          <div className="error-message" style={{ marginBottom: "16px", padding: "10px", background: "#fee", color: "#c33", borderRadius: "4px", fontSize: "13px" }}>
            {error}
          </div>
        )}
        {existingHolding && (
          <div style={{ marginBottom: "16px", padding: "10px", background: "#e8f5e9", borderRadius: "4px", fontSize: "13px", color: "#2e7d32" }}>
            You already own {existingHolding.qty} shares (Avg: ₹{existingHolding.avg.toFixed(2)})
          </div>
        )}
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              min="1"
              required
            />
          </fieldset>
          <fieldset>
            <legend>Price (₹) - Market: ₹{stock?.price?.toFixed(2) || "0.00"}</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              min="0"
              required
              placeholder={stock?.price?.toFixed(2) || "0.00"}
            />
          </fieldset>
        </div>
        <div className="order-summary">
          <div className="summary-item">
            <span>Quantity:</span>
            <span>{stockQuantity}</span>
          </div>
          <div className="summary-item">
            <span>Price per unit:</span>
            <span>₹{stockPrice || "0.00"}</span>
          </div>
          <div className="summary-item total">
            <span>Total Amount:</span>
            <span>₹{totalAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="buttons">
        <span className="margin-info">Total: ₹{totalAmount.toFixed(2)}</span>
        <div>
          <button
            className="btn btn-blue"
            onClick={handleBuyClick}
            disabled={loading}
          >
            {loading ? "Placing..." : "Buy"}
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default BuyActionWindow;
