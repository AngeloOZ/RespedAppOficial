import Image from "next/image";
import Link from "next/link";

import NavBarItem from "./NavBarItem";
import logoNavbar from "../../../public/Img/logo_navbar.png";

import styles from "../../../styles/Navbar.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../../context/Auth";

export const Navbar = () => {
  const { isLoggedIn, logoutUser } = useContext(AuthContext);
  return (
    <nav
      className={`navbar sticky-top navbar-expand-lg navbar-dark bg-dark ${styles.bg_navbar}`}
    >
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
              <a className={`btn ${styles.btn_menu}`}>
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
                  <ItemsUser logout={logoutUser} />
                ) : (
                  <ItemsLogin />
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const ItemsLogin = () => {
  return (
    <>
      <li>
        <Link href="/auth/login">
          <a className="dropdown-item">Iniciar sesión</a>
        </Link>
      </li>
      <li>
        <Link href="/auth/register">
          <a className="dropdown-item" href="#">
            Registrarse
          </a>
        </Link>
      </li>
    </>
  );
};
const ItemsUser = ({ logout }) => {
  return (
    <>
      <li>
        <Link href="#">
          <a className="dropdown-item">Perfil</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a className="dropdown-item">Mis ordenes</a>
        </Link>
      </li>
      <li onClick={logout}>
        <span className="dropdown-item" href="#">
          Salir
        </span>
      </li>
    </>
  );
};
