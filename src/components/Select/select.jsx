import { forwardRef } from "react";
import style from "./select.module.scss";

export const Select = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div className={style.select__div}>
      <label>{label}</label>
      <select ref={ref} {...rest} >
        <option value="" disabled autoFocus>Selecione um módulo</option>
        <option value="modulo1">Módulo 1</option>
        <option value="modulo2">Módulo 2</option>
        <option value="modulo3">Módulo 3</option>
      </select>
      {error ? <p>{error.message}</p> : null}
    </div>
  )
});