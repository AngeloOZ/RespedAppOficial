import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import ItemSidebar from "./ItemSidebar";
import logoNavbar from "../../public/Img/logo_navbar.png";
import { AuthContext } from "../../context";

export const SidebarAdmin = ({ showSide = false }) => {
  const { logoutUser } = useContext(AuthContext);

  return (
    <div className={`admin-navigation ${showSide ? "active" : ""}`}>
      <ul>
        <Link href={"/"} passHref>
          <li style={{ cursor: "pointer" }}>
            <a className="anchor-home" style={{ cursor: "pointer" }}>
              <span className="admin-logo" style={{ cursor: "pointer" }}>
                <Image src={logoNavbar} alt="Logo el fogon de coz" />
              </span>
              <span className="admin-title" style={{ cursor: "pointer" }}>
                El Fogón de COZ
              </span>
            </a>
          </li>
        </Link>
        <ItemSidebar
          href="/admin/dashboard"
          name="Dashboard"
          icon="grid-outline"
        />
        <ItemSidebar
          href="/admin/ordenes-activas"
          name="Mover Pedidos"
          icon="move-outline"
        />
        <ItemSidebar
          href="/admin/reservas-hoy"
          name="Reservas del día"
          icon="today-outline"
        />
        <ItemSidebar
          href="/admin/pedidos"
          name="Pedidos"
          icon="create-outline"
        />
        <ItemSidebar
          href="/admin/reservas"
          name="Reservas"
          icon="calendar-outline"
        />
        <ItemSidebar
          href="/admin/productos"
          name="Productos"
          icon="fast-food-outline"
        />
        <ItemSidebar
          href="/admin/usuarios"
          name="Usuarios"
          icon="people-outline"
        />
        <ItemSidebar
          href="/"
          name="Sign Out"
          icon="log-out-outline"
          onClickA={logoutUser}
        />
      </ul>
    </div>
  );
};
