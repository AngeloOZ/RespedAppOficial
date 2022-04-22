import Link from "next/link";
import css from "../../../styles/Header.module.scss";

const IconRedes = ({ icon, url = "/", target = "_blank" }) => {
  return (
    <a href={url} target={target} className={css.icon_social_media}>
      <i className={icon}></i>
    </a>
  );
};

export default IconRedes;
