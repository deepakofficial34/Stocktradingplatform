import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import axios from "axios";
import { useAuth } from "./AuthContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const TradingChart = () => {
  const { token } = useAuth();
  const [holdings, setHoldings] = React.useState([]);
  const [positions, setPositions] = React.useState([]);

  useEffect(() => {
    if (token) {
      // Fetch holdings
      axios
        .get("http://localhost:3002/allHoldings", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setHoldings(res.data);
        })
        .catch((err) => {
          console.error("Error fetching holdings:", err);
        });

      // Fetch positions
      axios
        .get("http://localhost:3002/allPositions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setPositions(res.data);
        })
        .catch((err) => {
          console.error("Error fetching positions:", err);
        });
    }
  }, [token]);

  // Prepare data for P&L chart
  const preparePnLData = () => {
    const holdingsData = holdings.map((holding) => {
      const curValue = holding.price * holding.qty;
      const pnl = curValue - holding.avg * holding.qty;
      return {
        name: holding.name,
        pnl: pnl,
      };
    });

    const positionsData = positions.map((position) => {
      const curValue = position.price * position.qty;
      const pnl = curValue - position.avg * position.qty;
      return {
        name: position.name,
        pnl: pnl,
      };
    });

    return [...holdingsData, ...positionsData].slice(0, 10); // Top 10
  };

  // Prepare data for portfolio distribution
  const preparePortfolioData = () => {
    const holdingsData = holdings.map((holding) => {
      const curValue = holding.price * holding.qty;
      return {
        name: holding.name,
        value: curValue,
      };
    });

    return holdingsData.slice(0, 5); // Top 5
  };

  const pnlData = preparePnLData();
  const portfolioData = preparePortfolioData();

  // Line Chart - P&L over time (simulated)
  const lineChartData = {
    labels: pnlData.map((item) => item.name),
    datasets: [
      {
        label: "P&L (₹)",
        data: pnlData.map((item) => item.pnl.toFixed(2)),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.1,
      },
    ],
  };

  // Bar Chart - Portfolio Value Distribution
  const barChartData = {
    labels: portfolioData.map((item) => item.name),
    datasets: [
      {
        label: "Current Value (₹)",
        data: portfolioData.map((item) => item.value.toFixed(2)),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Doughnut Chart - Portfolio Distribution
  const doughnutChartData = {
    labels: portfolioData.map((item) => item.name),
    datasets: [
      {
        label: "Portfolio Distribution",
        data: portfolioData.map((item) => item.value),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Trading Analytics",
      },
    },
  };

  if (holdings.length === 0 && positions.length === 0) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>No data available for charts. Please add holdings or positions.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ marginBottom: "20px" }}>Trading Charts</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <div style={{ height: "300px", background: "white", padding: "15px", borderRadius: "8px" }}>
          <h4>P&L by Instrument</h4>
          <Line data={lineChartData} options={chartOptions} />
        </div>
        <div style={{ height: "300px", background: "white", padding: "15px", borderRadius: "8px" }}>
          <h4>Portfolio Value Distribution</h4>
          <Bar data={barChartData} options={chartOptions} />
        </div>
        <div style={{ height: "300px", background: "white", padding: "15px", borderRadius: "8px" }}>
          <h4>Portfolio Allocation</h4>
          <Doughnut data={doughnutChartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default TradingChart;

