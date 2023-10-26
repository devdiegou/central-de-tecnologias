import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Input/input";
import style from "./formLogin.module.scss";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formLoginSchema } from "../../Schema/formLoginSchema";

export const FormLogin = ({ setIsLogin }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formLoginSchema)
  });

  const ref = useRef(null);

  const navigate = useNavigate();

  const userLogin = () => {
    setIsLogin(true);
  };

  const submit = (formData) => {
    console.log(formData)
  };

  return (
    <form onSubmit={handleSubmit(submit)} className={style.form__container}>
      <h2 className={style.title}>Login</h2>
      <Input ref={ref} label="Email" type="email" placeholder="Digite seu email..." {...register("email")} error={errors.email} />
      <Input ref={ref} label="Senha" type="password" placeholder="Digite sua senha..." {...register("password")} error={errors.password} />

      <button onClick={userLogin} className={style.submit__btn}>Entrar</button>

      <p className={style.paragraph}>Ainda não possui uma conta?</p>

      <Link className={style.register__btn} to="/register">
        Cadastre-se
      </Link>
    </form>
  );
};