import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../api";
import { TechContext } from "./TechContext";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const [openCreate, setOpenCreate] = useState(false);

  const navigate = useNavigate();

  const userRegister = async (formData) => {
    try {
      const { data } = api.post("/users", formData);
      toast.success("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Usuário já cadastrado.");
    }
  };

  const userLogin = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      setUser(data.user);
      localStorage.setItem("@TOKEN", data.token);
      toast.success("Login efetuado com sucesso!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      toast.error("Email ou senha incorretos!");
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
        try {
          const { data } = await api.get("/profile", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(data);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
          localStorage.clear();
        }
      }
    };
    loadUser();
    console.log(user)
  }, []);

  const logout = () => {
    localStorage.clear();
    setUser("");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userRegister,
        userLogin,
        logout,
        openCreate,
        setOpenCreate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
