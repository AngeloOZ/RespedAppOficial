import Image from "next/image";
import about from "../../../public/Img/about1.jpg";
import css from "../../../styles/Nosotross.module.scss";

export const Nosotros = () => {
  return (
    <section className={css.about_us} id="nosotros">
      <h2>Acerca de nosotros</h2>
      <div className="container-lg">
        <div className="row g-3">
          <div className="col-12 col-sm-6 d-sm-flex align-items-center">
            <div className={css.image_aboutUs}>
              <Image src={about} alt="" objectFit="cover"></Image>
            </div>
          </div>
          <div className="col-12 col-sm-6 d-flex align-items-center">
            <p className={css.paragraph}>
              Bienvenidos al Restaurante su cocción es 100% al carbón, su nombre viene en nombre de su madre la Sra. Carmen Ordóñez Zeas.
              <br /><br />
              Sus platos vienen servidos en piedra volcánica, y más está dirigido a la Sierra ecuatoriana de la parte Andina, Tiene 3 tipos de cocción a gas para las salsas, leña para las costillas en horno de leña, cuy, pavo y carbón para los cortes de carne, parrilladas, asados, mariscos, pulpo, calamar, camarón servidos en piedra carbónica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
