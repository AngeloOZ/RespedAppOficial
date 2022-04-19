import Image from "next/image";
import css from "../../styles/Galeria.module.scss";
import { ItemGalery } from "./ItemGalery";


export const Galeria = () => {
  return (
    <section className={css.contenedorGallery} id="galeria">
      <h2>GALERÍA DE ALIMENTOS</h2>
      <h3>NUESTRA GALERÍA DE parrilla</h3>
      <div className={css.subContGaleria}>
        <ItemGalery src="/img/galeria/2.jpg"/>
        <ItemGalery src="/img/galeria/3.jpg"/>
        <ItemGalery src="/img/galeria/4.jpg"/>
        <ItemGalery src="/img/galeria/5.webp"/>
        <ItemGalery src="/img/galeria/6.webp"/>
        <ItemGalery src="/img/galeria/7.webp"/>
        <ItemGalery src="/img/galeria/8.webp"/>
        <ItemGalery src="/img/galeria/9.webp"/>
      </div>
    </section>
  );
};
