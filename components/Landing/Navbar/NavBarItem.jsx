import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBarItem({ text, href }) {
  const { asPath } = useRouter();
  const listClassname =
    asPath === href ? "nav-link active_link_cs" : "nav-link";

  return (
    <li className="nav-item">
      <Link href={href}>
        <a className="nav-link">{text}</a>
      </Link>
    </li>
  );
}
