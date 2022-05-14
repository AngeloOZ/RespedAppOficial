import Image from "next/image";
import css from "../../styles/MenuItem.module.scss";

var url ="https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1652393339/website/61e1c889d30b4f841271c899_image-6-menu-qrcode-template-p-1080_qovxpe.jpg";

export const ItemMenu = ({producto}) => {
  return (
    <div className="col-12  col-md-6">
      <article className={css.menuItem}>
        <div className={css.contenedorLogo}>
          <Image src={url} layout="fill" objectFit="cover" alt="" />
        </div>
        <div className={css.bodyCard}>
          <header className={css.header}>
            <h2>{producto.name}</h2>
            <p>{producto.price}</p>
          </header>
          <p className={css.description}>{producto.detail}</p>
        </div>
      </article>
    </div>
  );
};
