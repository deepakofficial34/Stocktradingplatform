import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { useAuth } from "./AuthContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ stock }) => {
  const { closeSellWindow } = useContext(GeneralContext);
  const { token } = useAuth();
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(stock?.price || 0.0);
  const [loading, setLoading] = useState(false);
  const [availableQty, setAvailableQty] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    // Set market price automatically when component mounts
    if (stock?.price) {
      setStockPrice(stock.price);
    }
  }, [stock]);

  useEffect(() => {
    // Fetch user's holdings for this stock
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
            setAvailableQty(holding.qty);
            setStockQuantity(1);
            // Use market price from watchlist, not holding price
            if (stock?.price) {
              setStockPrice(stock.price);
            } else {
              setStockPrice(holding.price || 0);
            }
          } else {
            setAvailableQty(0);
            setError(`You don't own any shares of ${stock?.name || "this stock"}`);
          }
        })
        .catch((err) => {
          console.error("Error fetching holdings:", err);
          setError("Error loading holdings");
        });
    }
  }, [token, stock]);

  const handleCancelClick = () => {
    closeSellWindow();
  };

  const handleSellClick = async () => {
    setError("");
    
    if (!stockQuantity || stockQuantity <= 0) {
      setError("Please enter a valid quantity");
      return;
    }
    
    if (stockQuantity > availableQty) {
      setError(`You can only sell ${availableQty} shares. You own ${availableQty} shares.`);
      return;
    }
    
    if (!stockPrice || stockPrice <= 0) {
      setError("Please enter a valid price");
      return;
    }

    setLoading(true);
    try {
      const response =       await axios.post(
        "http://localhost:3002/newOrder",
        {
          name: stock.name,
          qty: parseInt(stockQuantity),
          price: parseFloat(stockPrice),
          mode: "SELL",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Sell order executed successfully!");
      closeSellWindow();
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

  const handleQuantityChange = (e) => {
    const qty = parseInt(e.target.value) || 0;
    if (qty > availableQty) {
      setError(`Maximum available: ${availableQty} shares`);
    } else {
      setError("");
    }
    setStockQuantity(qty);
  };

  const totalAmount = stockQuantity * stockPrice;

  return (
    <>
      <div className="modal-backdrop" onClick={handleCancelClick}></div>
      <div className="container" id="sell-window" draggable="true">
      <div className="order-header" style={{ background: "linear-gradient(135deg, #f44336 0%, #d32f2f 100%)" }}>
        <h3>Sell {stock?.name}</h3>
        <button className="close-btn" onClick={handleCancelClick}>×</button>
      </div>
      <div className="regular-order">
        {error && (
          <div className="error-message" style={{ marginBottom: "16px", padding: "10px", background: "#fee", color: "#c33", borderRadius: "4px", fontSize: "13px" }}>
            {error}
          </div>
        )}
        {availableQty > 0 && (
          <div style={{ marginBottom: "16px", padding: "10px", background: "#e3f2fd", borderRadius: "4px", fontSize: "13px", color: "#1976d2" }}>
            Available: {availableQty} shares
          </div>
        )}
        <div className="inputs">
          <fieldset>
            <legend>Qty. (Max: {availableQty})</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={handleQuantityChange}
              value={stockQuantity}
              min="1"
              max={availableQty}
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
            <span>Estimated Proceeds:</span>
            <span>₹{totalAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="buttons">
        <span className="margin-info">Total: ₹{totalAmount.toFixed(2)}</span>
        <div>
          <button
            className="btn btn-red"
            onClick={handleSellClick}
            disabled={loading || availableQty === 0}
          >
            {loading ? "Placing..." : availableQty === 0 ? "No Holdings" : "Sell"}
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

export default SellActionWindow;

