import { forwardRef } from "react";
import style from "./input.module.scss";

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <>
      <div className={style.input__div}>
        <label>{label}</label> 
        <input {...rest} ref={ref}/>
        {error ? <p>{error.message}</p> : null}
      </div>
    </>
  );
});