import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const navigate = useNavigate();

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
          console.log(error.response.data.message);
          localStorage.clear();
        }
      }
    };
    loadUser();
  }, []);

  const userRegister = async (formData) => {
    try {
      const { data } = api.post("/sessions", formData);
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
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const logout = () => {
    localStorage.clear();
    setUser("");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, userRegister, userLogin, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
