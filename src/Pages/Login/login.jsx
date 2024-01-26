import { useContext } from "react";
import { FormLogin } from "../../components/FormLogin/formLogin";
import style from "./login.module.scss";
import { UserContext } from "../../providers/userContext";

export const LoginPage = () => {
  const { setUser } = useContext(UserContext);

  return (
    <>
      <div className="global">
        <div className={style.login__container}>
          <h2 className={style.title} >Code Hub</h2>

          <FormLogin setUser={setUser} />
        </div>
      </div>
    </>
  );
};
