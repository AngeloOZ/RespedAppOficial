import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AuthContext } from "../../../context/Auth";
import NavBarItem from "./NavBarItem";
import logoNavbar from "../../../public/Img/logo_navbar.png";

import styles from "../../../styles/Navbar.module.scss";
import { FullScreenloader } from "../../Components";

export const Navbar = () => {
  const { isLoggedIn, rol, logoutUser } = useContext(AuthContext);
  const [loader, setLoader] = useState(false);
  return (
    <nav
      className={`navbar sticky-top navbar-expand-lg navbar-dark bg-dark ${styles.bg_navbar}`}
    >
      <FullScreenloader display={loader} />
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">
            <Image
              src={logoNavbar}
              width={50}
              height={40}
              alt="Logo El fogon de COZ"
              objectFit="cover"
            />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavBarItem text="Reservaciones" href="/#reservaciones" />
            <NavBarItem text="Galería" href="/#galeria" />
            <NavBarItem text="Nosotros" href="/#nosotros" />
            <NavBarItem text="Contacto" href="/#contacto" />
          </ul>

          <div className="d-flex">
            <Link href="/menu">
              <a
                className={`btn ${styles.btn_menu}`}
                onClick={() => setLoader(true)}
              >
                <i className="bi bi-grid-3x3-gap-fill"></i>
                <span className="ms-2">Ver menú</span>
              </a>
            </Link>
            <div className="btn-group ms-2">
              <button
                type="button"
                className="btn btn-outline-warning dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-fill"></i>
                <span className="ms-2">Mi cuenta</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                {isLoggedIn ? (
                  <OptionsMenuUsers
                    rol={rol}
                    logoutUser={logoutUser}
                    setLoader={setLoader}
                  />
                ) : (
                  <ItemsLogin loader={setLoader} />
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const OptionsMenuUsers = ({ rol, logoutUser, setLoader }) => {
  if (rol == process.env.NEXT_PUBLIC_TIPO_CLIENTE) {
    return <ItemsUser logout={logoutUser} loader={setLoader} />;
  } else if (rol == process.env.NEXT_PUBLIC_TIPO_ADMIN) {
    return <ItemsAdmin logout={logoutUser} loader={setLoader} />;
  } else if (rol == process.env.NEXT_PUBLIC_TIPO_MESERO) {
    return <ItemsMesero logout={logoutUser} loader={setLoader} />;
  } else {
    return <></>;
  }
};

const ItemsLogin = ({ loader }) => {
  return (
    <>
      <li>
        <Link href="/auth/login">
          <a className="dropdown-item" onClick={() => loader(true)}>
            Iniciar sesión
          </a>
        </Link>
      </li>
      <li>
        <Link href="/auth/register">
          <a className="dropdown-item" onClick={() => loader(true)}>
            Registrarse
          </a>
        </Link>
      </li>
    </>
  );
};

const ItemsUser = ({ logout, loader }) => {
  return (
    <>
      <li>
        <Link href="/cliente">
          <a className="dropdown-item" onClick={() => loader(true)}>
            Perfil
          </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/ordenes-activas">
          <a className="dropdown-item" onClick={() => loader(true)}>
            Ordenes activas
          </a>
        </Link>
      </li>
      <li>
        <Link href="/cliente/ordenes">
          <a className="dropdown-item" onClick={() => loader(true)}>
            Mis ordenes
          </a>
        </Link>
      </li>
      <li>
        <Link href="/cliente/ordenes">
          <a className="dropdown-item" onClick={() => loader(true)}>
            Mis direcciones
          </a>
        </Link>
      </li>
      <li onClick={logout} style={{ cursor: "pointer" }}>
        <span className="dropdown-item">Salir</span>
      </li>
    </>
  );
};

const ItemsAdmin = ({ logout, loader }) => {
  return (
    <>
      <li>
        <Link href="/admin/dashboard">
          <a className="dropdown-item" onClick={() => loader(true)}>
            Dashboard
          </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/reservas-hoy">
          <a className="dropdown-item" onClick={() => loader(true)}>
            Reservas del día
          </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/pedidos">
          <a className="dropdown-item" onClick={() => loader(true)}>
            Pedidos
          </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/productos">
          <a className="dropdown-item" onClick={() => loader(true)}>
            Productos
          </a>
        </Link>
      </li>
      <li onClick={logout} style={{ cursor: "pointer" }}>
        <span className="dropdown-item">Salir</span>
      </li>
    </>
  );
};

const ItemsMesero = ({ logout, loader }) => {
  return (
    <>
      <li>
        <Link href="/admin/ordenes-activas">
          <a className="dropdown-item" onClick={() => loader(true)}>
            Ordenes activas
          </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/reservas-hoy">
          <a className="dropdown-item" onClick={() => loader(true)}>
            Reservas del día
          </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/pedidos">
          <a className="dropdown-item" onClick={() => loader(true)}>
            Ordenes
          </a>
        </Link>
      </li>
      <li onClick={logout} style={{ cursor: "pointer" }}>
        <span className="dropdown-item">Salir</span>
      </li>
    </>
  );
};
