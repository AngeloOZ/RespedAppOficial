import { useState } from "react";

import Image from "next/image";

import { ItemGalery } from "./ItemGalery";
import FsLightbox from "fslightbox-react";

import css from "../../styles/Galeria.module.scss";

const photos = [
  "http://localhost:3000/img/galeria/2.jpg",
  "http://localhost:3000/img/galeria/3.jpg",
  "http://localhost:3000/img/galeria/4.jpg",
  "http://localhost:3000/img/galeria/5.webp",
  "http://localhost:3000/img/galeria/6.webp",
  "http://localhost:3000/img/galeria/7.webp",
  "http://localhost:3000/img/galeria/8.webp",
  "http://localhost:3000/img/galeria/9.webp",
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
