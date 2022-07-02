import { useContext } from "react";
import Link from "next/link";
import Image from 'next/image'


import { AuthContext } from "../../../context";
import ItemSidebar from "../../ComponentsAdmin/ItemSidebar";
import logoNavbar from "../../../public/Img/logo_navbar.png";

export const SideMenuClient = ({ showSide }) => {
  const { logoutUser } = useContext(AuthContext);

  return (
    <div className={`admin-navigation ${showSide ? "active" : ""}`}>
      <ul>
        <li>
          <Link href={"/"} passHref>
            <a className="anchor-home">
              <span className="admin-logo">
                <Image src={logoNavbar} alt="Logo el fogon de coz" />
              </span>
              <span className="admin-title">El Fogón de COZ</span>
            </a>
          </Link>
        </li>
        <ItemSidebar href="/" name="Inicio" icon="home-outline" />
        <ItemSidebar href="/menu" name="Menú" icon="restaurant-outline" />
        <ItemSidebar
          href="/cliente"
          name="Perfil"
          icon="person-circle-outline"
        />
        <ItemSidebar
          href="/cliente/ordenes"
          name="Ordenes"
          icon="fast-food-outline"
        />
        <ItemSidebar
          href="/cliente/direcciones"
          name="Direcciones"
          icon="map-outline"
        />
        <ItemSidebar href="#" name="Cerrar sesión" icon="log-out-outline" />
      </ul>
    </div>
  );
};
