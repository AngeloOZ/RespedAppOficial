import Image from "next/image";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import css from "../../../styles/Galeria.module.scss";

export const ItemGalery = ({
  src,
  alt = "Fogon de coz",
  slider,
  lightboxController
}) => {
  const handleClik = () => {
    lightboxController(obj =>{
      return {
        toggler: !obj.toggler,
        slide: slider
      }
    })
  };
  return (
    <>
      <div className={css.itemGalery} onClick={handleClik}>
        <Image src={src} objectFit="cover" alt={alt} layout="fill" />
      </div>
    </>
  );
};
