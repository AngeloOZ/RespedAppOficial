import { useMemo, useState } from "react";
import css from "./Input.module.scss";

export const Input = function ({
  type,
  name,
  id,
  placeholder,
  styles = "",
  errors = "",
  styleErrors = {}
}) {
  const isError = useMemo(() => {
    return errors.length == 0 ? false : true;
  }, [errors]);

  return (
    <div className={css.custom_input}>
      <input
        type={type}
        className={`${styles} ${isError ? css.error_input : ""}`}
        name={name}
        id={id}
        placeholder={placeholder}
      />
      {isError && <span className={css.error} style={styleErrors}>{errors}</span>}
    </div>
  );
};
