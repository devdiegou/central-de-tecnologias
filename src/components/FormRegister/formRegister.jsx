import { useEffect, useRef } from "react";
import { Input } from "../Input/input"
import style from "./formRegister.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formRegisterSchema } from "../../Schema/formRegisterSchema";
import { api } from "../../api";
import { Select } from "../Select/select";


export const FormRegister = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formRegisterSchema)
  });

  const userRegister = async (formData) => {
    try {
      const {data} = await api.post("/users", formData)
    } catch (error) {
      
    }
  }

  const ref = useRef(null);

  const submit = (formData) => {
    console.log(formData)
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)} className={style.form__container}>
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa!</p>

        <Input label="Nome" placeholder="Digite seu nome..." type="text" {...register("name")} error={errors.name} />

        <Input label="Email" placeholder="Digite seu email..." type="email" {...register("email")} error={errors.email} />

        <Input label="Senha" placeholder="Digite sua senha..." type="password" {...register("password")} error={errors.password} autoComplete="" />

        <Input label="Confirmar senha" placeholder="Digite novamente sua senha..." type="password" {...register("confirmPassword")} error={errors.confirmPassword} autoComplete="" />

        <Input label="Bio" placeholder="Fale sobre você..." type="text" {...register("bio")} error={errors.bio} />

        <Input label="Contato" placeholder="Opções de contato" type="text" {...register("contact")} error={errors.contact} />

        <Select label="Selecionar módulo" {...register("course_module")} error={errors.course_module} />

        <button className={style.confirm__btn}>Registrar</button>
      </form>

    </>
  );
};