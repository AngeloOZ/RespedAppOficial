import { useState } from "react";
import { ItemGalery } from "./ItemGalery";
import FsLightbox from "fslightbox-react";
import css from "../../../styles/Galeria.module.scss";

const photos = [
  "https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1657046088/website/galeria/122510757_155444719567891_4371302529982537811_n_oghq9p.jpg",
  "https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1657046088/website/galeria/120199216_147398310372532_3334073980194540602_n_zk3m7o.jpg",
  "https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1657046087/website/galeria/240837208_349237653521929_8328716388536471592_n_fnwpbz.jpg",
  "https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1657046087/website/galeria/120298079_147398290372534_4871182315588416212_n_dl7msy.jpg",
  "https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1657046088/website/galeria/240731391_349238250188536_8078677564356520885_n_s9b7do.jpg",
  "https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1657046087/website/galeria/122126675_155444709567892_8323357660443646374_n_tscuwd.jpg",
  "https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1657046087/website/galeria/240818515_349238036855224_212957930708011824_n_yoz5k7.jpg",
  "https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1657046087/website/galeria/240853292_349237960188565_6997606308842338693_n_onfxgb.jpg"
];

export const Galeria = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  return (
    <section className={css.contenedorGallery} id="galeria">
      <h2>GALERÍA DE ALIMENTOS</h2>
      <h3>NUESTRA GALERÍA DE parrilla</h3>
      <div className={css.subContGaleria}>
        {photos.map((photo, index) => {
          return (
            <ItemGalery
              lightboxController={setLightboxController}
              src={photo}
              key={index}
              slider={index + 1}
            />
          );
        })}
      </div>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={photos}
        slide={lightboxController.slide}
      />
    </section>
  );
};
