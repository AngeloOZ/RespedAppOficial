import Image from "next/image";

import styles from "../../styles/Header.module.scss";
import IconRedes from "../Header/IconRedes";
import css from "../../styles/Footer.module.scss";
import logo from "../../public/Img/logo_navbar.png";
import visa from "../../public/Img/visa.png";
import mastercard from "../../public/Img/mastercard.png";
import paypal from "../../public/Img/paypal.png";
import cash from "../../public/Img/money.png";

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.sub_contenedor}>
        <div className={css.contenedor_logo}>
          <div className={css.logo}>
            <Image src={logo} alt="logo el fogon de coz"></Image>
          </div>
          <h2>el fogón de coz</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          aut amet, earum suscipit totam fugiat neque aliquam aperiam minus
          autem assumenda consequatur iusto laudantium optio. Aliquid quas rem
          error soluta quis nam nulla similique quae blanditiis illo quo cum
          repellat ratione reprehenderit a ut ipsum officiis corrupti, sapiente
          expedita quos!
        </p>
      </div>
      <div className={css.sub_contenedor}>
        <div className={css.contenedor_text}>
          <h2>contáctenos</h2>
          <p>
            <strong>Ciudad Baños de Agua Santa</strong>
            <span className={css.infor_dir}>
              <i className="bi bi-geo-alt-fill"></i>
              <span>
                Ulba BARRIO LA Cienega Baños, Barrio La Ciénega callejón la
                Represa
              </span>
            </span>
            <span className={css.infor_dir}>
              <i className="bi bi-telephone-fill"></i>
              <span>0987654321</span>
            </span>
          </p>
          <br />
          <p>
            <strong>Ciudad del Puyo</strong>
            <span className={css.infor_dir}>
              <i className="bi bi-geo-alt-fill"></i>
              <span>
                Ulba BARRIO LA Cienega Baños, Barrio La Ciénega callejón la
                Represa
              </span>
            </span>
            <span className={css.infor_dir}>
              <i className="bi bi-telephone-fill"></i>
              <span>0987654321</span>
            </span>
          </p>
        </div>
      </div>
      <div className={css.sub_contenedor}>
        <div className={css.contenedor_text}>
          <h2>PAGOS QUE ACEPTAMOS</h2>
          <div className={css.contenedor_pagos}>
            <div className={css.img_pagos}>
              <Image src={visa} objectFit="cover" alt="visa"></Image>
            </div>
            <div className={css.img_pagos}>
              <Image
                src={mastercard}
                objectFit="cover"
                alt="mastercard"
              ></Image>
            </div>
            <div className={css.img_pagos}>
              <Image src={paypal} objectFit="cover" alt="paypal"></Image>
            </div>
            <div className={css.img_pagos}>
              <Image src={cash} objectFit="cover" alt="cash"></Image>
            </div>
          </div>
        </div>
        <div className={`${css.contenedor_text} mt-3`}>
          <h2>SIGUENOS</h2>
          <div className={css.social_media}>
            <IconRedes url="#" icon="bi bi-facebook" />
            <IconRedes url="#" icon="bi bi-instagram" />
            <IconRedes url="#" icon="bi bi-whatsapp" />
          </div>
        </div>
      </div>
    </footer>
  );
};
