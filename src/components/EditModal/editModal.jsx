import { useContext } from "react";
import { Input } from "../Input/input";
import style from "./editModal.module.scss";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";

export const EditTechModal = () => {
  const { editingTech, setEditingTech, techUpdate } = useContext(TechContext);
  const { register, handleSubmit } = useForm({
    values: {
      title: editingTech.title,
      status: editingTech.status,
    },
  });

  const submit = (formData) => {
    techUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className={style.modalOverlay} role="dialog">
        <div className={style.modalBox}>
          <div className={style.tech__header}>
            <h3>Tecnologia Detalhes</h3>
            <p
              className={style.close__btn}
              onClick={() => setEditingTech(null)}
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
                placeholder="Tecnologia"
                {...register("title")}
              />
            </div>
            <div className={style.select__div}>
              <label>Status</label>
              <select {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>

            <button>Salvar alterações</button>
          </div>
        </div>
      </div>
    </form>
  );
};
