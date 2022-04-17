import styles from "../../styles/Header.module.scss";
import IconRedes from "./IconRedes";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.title_header}>
                <h1>
                    <span className="text-uppercase">el fogón</span>
                    <div class={styles.logo}>
                        <img src="/img/logo_header.png" alt="El fogón de coz" />
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
                <IconRedes url="#" icon="bi bi-telephone-fill"/>
                <IconRedes url="#" icon="bi bi-envelope-fill"/>
                <IconRedes url="#" icon="bi bi-geo-alt-fill" />
            </div>
        </header>
    )
}
