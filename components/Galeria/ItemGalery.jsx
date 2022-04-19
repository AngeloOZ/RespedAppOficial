import Image from "next/image";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import css from "../../styles/Galeria.module.scss";

export const ItemGalery = ({ src, alt = "Fogon de coz" }) => {
  return (
    <>
      <div className={css.itemGalery}>
        <Image src={src} objectFit="cover" alt={alt} layout="fill" />
      </div>
    </>
  );
};
