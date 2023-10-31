import { forwardRef } from "react";
import style from "./select.module.scss";

export const Select = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div className={style.select__div}>
      <label>{label}</label>
      <select ref={ref} {...rest}>
        <option value="" disabled autoFocus>
          Selecione um módulo
        </option>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Módulo 1
        </option>
        <option value="Segundo módulo (Frontend Avançado)">Módulo 2</option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Módulo 3
        </option>
        <option value="Quarto módulo (Backend Avançado)">Módulo 4</option>
      </select>
      {error ? <p>{error.message}</p> : null}
    </div>
  );
});
