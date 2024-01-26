import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../providers/userContext";
import style from "./createModal.module.scss";
import { TechContext } from "../../providers/TechContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { addTechSchema } from "../../Schema/addTechSchema";

export const CreateTechModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addTechSchema),
  });
  const { setOpenCreate } = useContext(UserContext);
  const { createPost } = useContext(TechContext);

  const submit = (formData) => {
    createPost(formData);
    setOpenCreate(false);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className={style.modalOverlay} role="dialog">
        <div className={style.modalBox}>
          <div className={style.tech__header}>
            <h3>Cadastrar Tecnologia</h3>
            <p
              className={style.close__btn}
              onClick={() => setOpenCreate(false)}
            >
              X
            </p>
          </div>

          <div className={style.tech__div}>
            <div className={style.div__input}>
              <label>Nome</label>
              <input
                label="Nome"
                type="text"
                placeholder="Digite o nome da tecnologia"
                error={errors.title}
                {...register("title")}
              />
            </div>
            <div className={style.select__div}>
              <label>Selecionar status</label>
              <select {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>

            <button>Cadastrar Tecnologia</button>
          </div>
        </div>
      </div>
    </form>
  );
};
