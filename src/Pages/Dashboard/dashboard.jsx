import style from "./dashboard.module.scss";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext";
import { TechList } from "../../components/TechList/list";
import { CreateTechModal } from "../../components/CreateModal/createModal";
import { TechContext, TechProvider } from "../../providers/TechContext";
import { EditTechModal } from "../../components/EditModal/editModal";

export const DashboardPage = () => {
  const { user } = useContext(UserContext);
  const { logout } = useContext(UserContext);
  const { openCreate, setOpenCreate } = useContext(UserContext);

  const { editingTech } = useContext(TechContext);

  return (
    <>
      <header>
        <div className="container">
          <div className={style.header__container}>
            <h2 className={style.title}>Code Hub</h2>

            <button onClick={logout}>Sair</button>
          </div>
        </div>
      </header>

      <div className={style.info__container}>
        <div className="container">
          <div className={style.user__info}>
            <h2>Olá, {user.name}</h2>

            <p>{user.course_module}</p>
          </div>

          <div className={style.main__div}>
            <div className={style.header__tech}>
              <h3>Tecnologias</h3>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                onClick={() => setOpenCreate(true)}
              >
                <rect
                  x="0.514648"
                  width="32.4853"
                  height="32"
                  rx="4"
                  fill="#212529"
                />
                <path
                  d="M15.9721 21.5625H18.1055V17.3281H22.4041V15.2266H18.1055V11H15.9721V15.2266H11.6814V17.3281H15.9721V21.5625Z"
                  fill="white"
                />
              </svg>
            </div>

            <TechList />
          </div>
        </div>
      </div>
      {editingTech ? <EditTechModal /> : null}
      {openCreate ? <CreateTechModal /> : null}
    </>
  );
};
