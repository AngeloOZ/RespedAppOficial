import { useMemo, useState } from "react";
import css from "./Input.module.scss";

export const Input = function ({
  type,
  name,
  id,
  placeholder,
  styles = "",
  errors = false,
  helperText="",
  styleErrors = {},
  useFormRegister
}) {
  const isError = useMemo(() => {
    return errors
  }, [errors]);

  return (
    <div className={css.custom_input}>
      <input
        type={type}
        className={`${styles} ${isError ? css.error_input : ""}`}
        name={name}
        id={id}
        placeholder={placeholder}
        {...useFormRegister}
      />
      {isError && <span className={css.error} style={styleErrors}>{helperText}</span>}
    </div>
  );
};
