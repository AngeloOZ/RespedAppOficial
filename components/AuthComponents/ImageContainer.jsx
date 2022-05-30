import Image from "next/image";
import css from "../../styles/Auth.module.scss";

export const ImageContainer = ({ src, alt }) => {
  return (
    <div className={css.image_container}>
      <Image src={src} layout="fill" alt={alt} />
    </div>
  );
};
