import Image from "next/image";
import styles from "../../../styles/Header.module.scss";
import IconRedes from "./IconRedes";
import logoHeader from "../../../public/Img/logo_header.png";;

export const Header = () => {
  return (
    <header className={styles.header} id="home">
      <div className={styles.title_header}>
        <h1>
          <span className="text-uppercase">el fogón</span>
          <div className={styles.logo}>
            <Image src={logoHeader} alt="El fogón de coz" />
          </div>
          <span className="text-uppercase">de coz</span>
        </h1>
      </div>
      <div className={styles.social_media}>
        <IconRedes url="#" icon="bi bi-facebook" />
        <IconRedes url="#" icon="bi bi-instagram" />
        <IconRedes url="#" icon="bi bi-whatsapp" />
      </div>
      <div className={styles.information_contact}>
        <IconRedes url="#" icon="bi bi-telephone-fill" />
        <IconRedes url="#" icon="bi bi-envelope-fill" />
        <IconRedes url="#" icon="bi bi-geo-alt-fill" />
      </div>
    </header>
  );
};
