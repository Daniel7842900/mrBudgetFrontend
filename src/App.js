import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Expense from "./pages/Expense";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        {/* <AppHeader /> */}
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/expense" element={<Expense />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
