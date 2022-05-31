//import
import Link from "next/link";
import { useRouter } from "next/router";

import css from "../../../styles/MenuItem.module.scss";

export default function NavBarItem({ text, href }) {
  const { asPath } = useRouter();

  return (
    <li className="nav-item">
      <Link href={href}>
        <a
          className={`nav-link ${css.nav_link_custom} ${
            asPath == href && css.active
          }`}
        >
          {text}
        </a>
      </Link>
    </li>
  );
}
