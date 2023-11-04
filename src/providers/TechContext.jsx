import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../api";
import { toast } from "react-toastify";
import { UserContext } from "./userContext";
import { useNavigate } from "react-router-dom";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { user, setUser } = useContext(UserContext);

  const [techList, setTechList] = useState(user?.techs ? user.techs : []);

  const [editingTech, setEditingTech] = useState(null);


  const navigate = useNavigate();

  const createPost = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia criada com sucesso!");
      setTechList([data, ...techList]);
    } catch (error) {
      console.log(error);
    }
  };

  const techUpdate = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.put(
        `/users/techs/${editingTech.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const newTechList = techList.map((tech) => {
        if (tech.id === editingTech.id) {
          return data;
        } else {
          return tech;
        }
      });
      setTechList(newTechList);
      setEditingTech(null);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const loadUser = async () => {
  //     const token = localStorage.getItem("@TOKEN");
  //     if (token) {
  //       try {
  //         const { data } = await api.get("/profile", {
  //           headers: { Authorization: `Bearer ${token}` },
  //         });
  //         setUser(data);
  //         setTechList(user.techs);
  //         navigate("/dashboard");
  //       } catch (error) {
  //         console.log(error);
  //         localStorage.clear();
  //       }
  //     }
  //   };
  //   loadUser();
  // }, []);

  const techDelete = async (deletingId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      await api.delete(`/users/techs/${deletingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newTechList = techList.filter((tech) => tech.id !== deletingId);
      setTechList(newTechList);

      toast.success("Exclusão realizada com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        createPost,
        techList,
        setTechList,
        editingTech,
        setEditingTech,
        techUpdate,
        techDelete,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
