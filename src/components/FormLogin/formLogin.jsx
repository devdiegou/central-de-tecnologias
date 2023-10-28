import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Input/input";
import style from "./formLogin.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formLoginSchema } from "../../Schema/formLoginSchema";
import { UserContext } from "../../providers/userContext";
import { useContext } from "react";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formLoginSchema),
  });

  const { userLogin } = useContext(UserContext);

  return (
    <form onSubmit={handleSubmit(userLogin)} className={style.form__container}>
      <h2 className={style.title}>Login</h2>
      <Input
        label="Email"
        type="email"
        placeholder="Digite seu email..."
        {...register("email")}
        error={errors.email}
      />
      <Input
        label="Senha"
        type="password"
        placeholder="Digite sua senha..."
        {...register("password")}
        error={errors.password}
      />

      <button className={style.submit__btn}>Entrar</button>

      <p className={style.paragraph}>Ainda não possui uma conta?</p>

      <Link className={style.register__btn} to="/register">
        Cadastre-se
      </Link>
    </form>
  );
};
