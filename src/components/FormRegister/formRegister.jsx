import { Input } from "../Input/input"
import style from "./formRegister.module.scss";

export const FormRegister = () => {
  return (
    <>
      <form className={style.form__container}>
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa!</p>

        <Input label="Nome" placeholder="Digite seu nome..." type="text" />
        <Input label="Email" placeholder="Digite seu email..." type="email" />
        <Input label="Senha" placeholder="Digite sua senha..." type="password" />
        <Input label="Confirmar senha" placeholder="Digite novamente sua senha..." type="password" />
        <Input label="Bio" placeholder="Fale sobre você..." type="text" />
        <Input label="Contato" placeholder="Opções de contato" type="text" />
        <div className={style.select__div}>
          <label>Selecionar Módulo</label>
          <select>
            <option className={style.autofocus} autoFocus value="">Selecione um módulo</option>
            <option value="modulo1">Módulo 1</option>
            <option value="modulo2">Módulo 2</option>
            <option value="modulo3">Módulo 3</option>
          </select>
        </div>
        <button className={style.confirm__btn}>Registrar</button>
      </form>

    </>
  );
};