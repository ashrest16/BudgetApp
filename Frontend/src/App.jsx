import Home from "./pages/Home/Home";
import Budget from "./pages/Budget/Budget";
import About from "./pages/About/About";
import Transaction from "./pages/Transactions/Transaction";
import Layout from "./Layout";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useFetch from "@/useFetch";
import { useState } from "react";
import { UserProvider } from "./context/useAuth";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
function App() {
  const {transactions, isPending, setTransactions} = useFetch("http://localhost:8000/transactions");
  const [budget,setBudget] = useState([]);
  return (
    <div className="h-screen">
      <UserProvider>
          <Navbar/>
          <Outlet />
      </UserProvider>
      <ToastContainer />
    </div>
  );
}

export default App;