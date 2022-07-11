import Link from "next/link";
import Image from "next/image";
import ItemSidebar from "./ItemSidebar";
import logoNavbar from "../../public/Img/logo_navbar.png";

export const SidebarAdmin = ({ showSide }) => {
  return (
    <div className={`admin-navigation ${showSide && "active"}`}>
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
        <ItemSidebar
          href="/admin/dashboard"
          name="Dashboard"
          icon="grid-outline"
        />
        <ItemSidebar
          href="/admin/ordenes-activas"
          name="Ordenes activas"
          icon="create-outline"
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
        <ItemSidebar href="/" name="Sign Out" icon="log-out-outline" />
      </ul>
    </div>
  );
};
