import Link from "next/link";
import styles from "../../styles/Navbar.module.scss";
import NavBarItem from "./NavBarItem";

export const Navbar = () => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${styles.bg_navbar}`}>
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">
                        <img src="/img/logo_navbar.png" width="50" alt="Logo El fogon de COZ" />
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavBarItem text="Reservaciones" url="#reservaciones" />
                        <NavBarItem text="Galería" url="#galeria" />
                        <NavBarItem text="Nosotros" url="#nosotros" />
                        <NavBarItem text="Contacto" url="#contacto" />
                    </ul>
                    <div className="d-flex">
                        <Link href="/">
                            <a className={`btn ${styles.btn_menu}`}>
                                <i className="bi bi-grid-3x3-gap-fill"></i>
                                <span className="ms-2">Ver menú</span>
                            </a>
                        </Link>
                        <div className="btn-group ms-2">
                            <button type="button" className="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-person-fill"></i>
                                <span className="ms-2">Mi cuenta</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
