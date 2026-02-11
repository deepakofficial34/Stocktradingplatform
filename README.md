# Online Trading Platform

A full-stack online trading platform inspired by Zerodha Kite, built with React and Node.js. This platform provides a comprehensive trading dashboard with real-time stock tracking, order management, portfolio visualization, and user authentication.

## 🚀 Features

### Authentication & Security
- ✅ User Registration & Login with JWT authentication
- ✅ Protected Routes - All dashboard routes require authentication
- ✅ Password Encryption using Bcrypt

### Trading Features
- ✅ Buy Orders - Place buy orders with automatic market price population
- ✅ Sell Orders - Sell stocks with holdings validation (can't sell more than owned)
- ✅ Order Management - View all your orders with complete history
- ✅ Holdings Tracking - Real-time portfolio tracking with P&L calculations
- ✅ Positions - Track your current positions

### Dashboard Features
- ✅ Watchlist - Real-time stock prices with buy/sell quick actions
- ✅ Portfolio Charts - Interactive charts using Chart.js:
  - P&L by Instrument (Line Chart)
  - Portfolio Value Distribution (Bar Chart)
  - Portfolio Allocation (Doughnut Chart)
- ✅ Summary Dashboard - Overview of equity, holdings, and margins
- ✅ Orders History - Complete order history with timestamps

### User Interface
- ✅ Modern Design - Clean, professional UI inspired by Zerodha Kite
- ✅ Responsive Layout - Works on desktop and mobile devices
- ✅ Real-time Updates - Live data updates for holdings and positions
- ✅ Floating Logout - Convenient logout button in bottom-right corner

## 🛠️ Tech Stack

### Frontend (Dashboard)
- React 18.2.0
- React Router 6.22.2
- Chart.js 4.4.2 & react-chartjs-2
- Material-UI 5.18.0
- Axios 1.13.4

### Backend
- Node.js with Express 5.2.1
- MongoDB with Mongoose 9.1.5
- JWT (jsonwebtoken) for authentication
- Bcryptjs for password hashing
- CORS enabled for cross-origin requests

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas)

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd "Online trading platform"
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
PORT=3002
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key_here
```

**Example MongoDB connection string:**
- Local: `mongodb://localhost:27017/trading-platform`
- Atlas: `mongodb+srv://username:password@cluster.mongodb.net/trading-platform`

### 3. Dashboard Setup

```bash
cd dashboard
npm install
```

### 4. Frontend Setup (Optional - Landing Page)

```bash
cd frontend
npm install
```

## 🚀 Running the Application

### Start Backend Server

```bash
cd backend
npm start
```

Backend runs on `http://localhost:3002`

### Start Dashboard

```bash
cd dashboard
npm start
```

Dashboard runs on `http://localhost:3000`

### Start Frontend (Optional)

```bash
cd frontend
npm start
```

Frontend runs on `http://localhost:3001`

## 📝 API Endpoints

### Authentication
- `POST /signup` - Register a new user
- `POST /login` - Login user
- `GET /verify` - Verify JWT token

### Trading
- `GET /allHoldings` - Get user's holdings (Protected)
- `GET /allPositions` - Get user's positions (Protected)
- `GET /allOrders` - Get user's order history (Protected)
- `POST /newOrder` - Place a new order (Buy/Sell) (Protected)

**Note:** All protected routes require JWT token in Authorization header:
```
Authorization: Bearer <your_token>
```

## 🎯 Key Features Explained

### Buy Orders
- Automatically populates market price from watchlist
- Updates holdings with weighted average price calculation
- Creates new holdings or updates existing ones

### Sell Orders
- Validates that user owns the stock
- Checks available quantity before allowing sale
- Updates holdings (reduces quantity or removes if all sold)
- Automatically populates market price

### Holdings Management
- Each user has their own portfolio
- Weighted average price calculation for multiple buys
- Real-time P&L calculations
- Current value tracking

## 🔐 Environment Variables

### Backend (.env)
```env
PORT=3002
MONGO_URL=mongodb://localhost:27017/trading-platform
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
```

## 📦 Build for Production

### Build Dashboard
```bash
cd dashboard
npm run build
```

### Build Frontend
```bash
cd frontend
npm run build
```

## 📁 Project Structure

```
Online trading platform/
├── backend/                 # Node.js/Express backend
│   ├── index.js            # Main server file
│   ├── model/              # MongoDB models
│   ├── schemas/            # MongoDB schemas
│   └── .env.example        # Environment variables template
│
├── dashboard/              # React dashboard application
│   ├── src/
│   │   ├── components/     # React components
│   │   └── data/          # Mock data
│   └── public/
│
└── frontend/              # Landing page (optional)
    └── src/
        └── landing_page/
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Your Name

## 🙏 Acknowledgments

- Inspired by Zerodha Kite platform
- Chart.js for data visualization
- Material-UI for icons and components

---

**Note:** This is a demo/educational project. For production use, ensure proper security measures, error handling, and compliance with financial regulations.

