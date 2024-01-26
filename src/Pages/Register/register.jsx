import { Link } from "react-router-dom";
import { FormRegister } from "../../components/FormRegister/formRegister";
import style from "./register.module.scss";

export const RegisterPage = () => {
  return (
    <>
      <div className="global">
        <div className={style.register__container}>
          <div className={style.top__container}>
            <h2 className={style.title}>Code Hub</h2>

            <Link to="/" className={style.back}>
              Voltar
            </Link>
          </div>

          <FormRegister />
        </div>
      </div>
    </>
  );
};
