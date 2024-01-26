import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { LoginPage } from "../pages/Login/login";
import { RegisterPage } from "../pages/Register/register";
import { DashboardPage } from "../Pages/Dashboard/dashboard";
import { UserContext } from "../providers/userContext";
import { ProtectedRoutes } from "../components/ProtectedRoutes/protectedRoute";
import { TechProvider } from "../providers/TechContext";

export const RoutesMain = () => {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<LoginPage setUser={setUser} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route
          index
          element={
            <TechProvider>
              <DashboardPage user={user} setUser={setUser} />
            </TechProvider>
          }
        />
      </Route>
    </Routes>
  );
};
