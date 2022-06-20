import React from "react";
import css from "./Loader.module.scss";

export const FullScreenloader = ({ display = true }) => {
  if (display) {
    return (
      <div className={css.fullScreen}>
        <span className={css.loader}></span>
      </div>
    );
  }
  return <></>;
};
