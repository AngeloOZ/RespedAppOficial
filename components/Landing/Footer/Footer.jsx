import Image from "next/image";
import css from "../../../styles/Footer.module.scss";
import logo from "../../../public/Img/logo_navbar.png";

export const Footer = () => {
  const date = new Date();
  return (
    <footer className={css.footer}>
      <div className={css.container_custom}>
        <div className={css.row_custom}>
          <div className={css.footer_col}>
            <h4>Restaurante</h4>
            <div className={css.contenedor_logo}>
              <div className={css.logo}>
                <Image src={logo} alt="logo el fogon de coz"></Image>
              </div>
              <h2>el fogón de coz</h2>
            </div>
            <p className={css.text_history}>
              Bienvenidos al Restaurante su cocción es 100% al carbón, su nombre
              viene en nombre de su madre la Sra. Carmen Ordóñez Zeas.
            </p>
          </div>
          <div className={css.footer_col}>
            <h4>Baños de Agua Santa</h4>
            <div className={css.text_contact}>
              <p>
                <i className="bi bi-geo-alt-fill"></i>
                <span>Barrio La Ciénega Callejón la Represa</span>
              </p>
              <a href="tel:+593987000574">
                <p>
                  <i className="bi bi-telephone-fill"></i>
                  <span>0987000574</span>
                </p>
              </a>
              <p>
                <i className="bi bi-calendar-event-fill"></i>
                <span>Lunes - Domingo</span>
              </p>
              <p>
                <i className="bi bi-clock-fill"></i>
                <span>12:00 - 22:00</span>
              </p>
            </div>
          </div>
          <div className={css.footer_col}>
            <h4>Puyo</h4>
            <div className={css.text_contact}>
              <p>
                <i className="bi bi-geo-alt-fill"></i>
                <span>
                  Barrio Obrero Calles Azuay y Chimborazo Diagonal al Agua
                  Bendita
                </span>
              </p>
              <a href="tel:+593983114429">
                <p>
                  <i className="bi bi-telephone-fill"></i>
                  <span>0983114429</span>
                </p>
              </a>
              <p>
                <i className="bi bi-calendar-event-fill"></i>
                <span>Lunes - Domingo</span>
              </p>
              <p>
                <i className="bi bi-clock-fill"></i>
                <span>13:00 - 22:00</span>
              </p>
            </div>
          </div>
          <div className={css.footer_col}>
            <h4>Siguenos</h4>
            <div className={css.social_links}>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={css.copyrigth}>
        Copyright &copy; {date.getFullYear()} - Diseñado por Angello
      </div>
    </footer>
  );
};
