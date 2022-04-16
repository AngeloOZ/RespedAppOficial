import Link from "next/link";
import css from "../../styles/Navbar.module.scss"

export default function NavBarItem({ text, url, active = false }) {
    return (
        <li className="nav-item">
            <Link href={url}>
                <a 
                    className={`nav-link ${active && "active"} ${css.nav_link_custom}`}>
                    {text}
                </a>
            </Link> 
        </li>
    )
}