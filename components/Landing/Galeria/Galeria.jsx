import { useState } from "react";

import Image from "next/image";
import { ItemGalery } from "./ItemGalery";
import FsLightbox from "fslightbox-react";

import css from "../../../styles/Galeria.module.scss";
import bg from "../../../public/Img/bg.jpg";


const photos = [
  "https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1650670208/website/galeria/6_atv7hc.webp",
  "https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1650670203/website/galeria/4_vshe1w.jpg",
  "https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1650670200/website/galeria/5_hdtmxj.webp",
  "https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1650670200/website/galeria/7_nhnz1l.webp",
  "https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1650670200/website/galeria/3_wczxnz.jpg",
  "https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1650670200/website/galeria/9_lzuowc.webp",
  "https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1650670199/website/galeria/8_vbdtxp.webp",
  "https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1650670199/website/galeria/2_qo4ubs.jpg",
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
