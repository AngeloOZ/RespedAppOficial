import Image from "next/image";
import css from "../../styles/MenuItem.module.scss"

var url = "https://assets.website-files.com/61e0a7ab0e57e943a15f3b14/61e1c889d30b4f841271c899_image-6-menu-qrcode-template-p-1080.jpeg";
// import styled from "styled-components";

// const ItemDiv = styled.div`
//     background-color: crimson;
//     .bodyCard{
//         background-color: royalblue;
//         margin: 10px;
//     }
// `;

export const ItemMenu = () => {
  return (
    <article className={css.menuItem} >
      <div className={css.contenedorLogo}>
        <Image src={url} layout="fill" objectFit="cover" alt="" />
      </div>
      <div className={css.bodyCard}>
        <header className={css.header}>
          <h2>Lorem ipsum dolor sit.</h2>
          <p>5</p>
        </header>
        <p className={css.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat tempore eius minima totam dicta praesentium?</p>
      </div>
    </article>
  );
};
