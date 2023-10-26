import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { LoginPage } from "../pages/Login/login";
import { RegisterPage } from "../pages/Register/register";
import { DashboardPage } from "../pages/Dashboard/dashboard";

export const RoutesMain = () => {
  const [user, setUser] = useState({});

  return (
    <Routes>
      <Route path="/" element={<LoginPage setUser={setUser}/>}/>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage user={user} setUser={setUser}/>}/>
    </Routes>
  );
};