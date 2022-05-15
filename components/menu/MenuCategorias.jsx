import React from "react";

import css from "./Menu.module.scss";

export const MenuCategorias = ({
  categorias,
  category,
  setSelectedCategory,
}) => {
  const handleClickCategory = (id) => {
    setSelectedCategory(id);
  };

  return (
    <div className={css.categorias}>
      <ul>
        <li
          key={0}
          className={category == 0 ? css.active : ""}
          onClick={() => handleClickCategory(0)}
        >
          Todas
        </li>
        {categorias.map(({ idCategoria, name }) => {
          return (
            <li
              className={category == idCategoria ? css.active : ""}
              key={idCategoria}
              onClick={() => handleClickCategory(idCategoria)}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
