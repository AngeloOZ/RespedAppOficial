import { useState } from "react";

import css from "./ButtonCart.module.scss";

export const ButtonCart = ({ style = {}, onClick = () => {} }) => {
  const [activeAnimate, setActiveAnimate] = useState(false);
  
  const handleClick = () => {
    if (!activeAnimate) {
      setActiveAnimate(true);

      setTimeout(() => {
        setActiveAnimate(false);
      }, 2500);

      onClick();
    }
  };

  return (
    <button
      className={`${css.cartButton} ${activeAnimate ? css.clicked : ""}`}
      onClick={handleClick}
      style={style}
    >
      <span className={css.addToCart}>Agregar al carrito</span>
      <span className={css.added}>Agregado</span>
      <i className={`bi bi-cart-fill ${css.aux1}`}></i>
      <i className={`bi bi-box2-fill ${css.aux2}`}></i>
    </button>
  );
};
