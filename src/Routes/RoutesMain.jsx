import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../Pages/Dashboard/dashboard";
import { LoginPage } from "../pages/Login/login";
import { RegisterPage } from "../Pages/Register/register";
import { useState } from "react";

export const RoutesMain = () => {
  const [user, setUser] = useState({});

  return (
    <Routes>
      <Route path="/" element={<LoginPage setUser={setUser}/>} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage user={user} setUser={setUser} />} />
    </Routes>
  );
};