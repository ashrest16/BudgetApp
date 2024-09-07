import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../components/Dashboard"; // Import the Dashboard component
import Transaction from "../pages/Transactions/Transaction";
import About from "../pages/About/About";
import Budget from "../pages/Budget/Budget";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home/Home";

// Define the router with all the necessary routes and components
export const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,  // This is the main layout component
    children: [
      {
        path: "/",
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>, // Parent component for shared state
        children: [
          {
            path: "transaction",
            element: (
              <ProtectedRoute>
                <Transaction />
              </ProtectedRoute>
            ),
          },
          {
            path: "budget",
            element: (
              <ProtectedRoute>
                <Budget />
              </ProtectedRoute>
            ),
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "home",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);
