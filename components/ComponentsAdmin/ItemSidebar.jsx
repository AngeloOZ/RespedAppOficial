import Link from "next/link";
import { useRouter } from "next/router";

const ItemSidebar = ({ href, name, icon }) => {
  const { asPath } = useRouter();
  return (
    <li className={asPath == href ? "hovered" : ""}>
      <Link href={href}>
        <a>
          <span className="admin-icon">
            <ion-icon name={icon}></ion-icon>
          </span>
          <span className="admin-title">{name}</span>
        </a>
      </Link>
    </li>
  );
};

export default ItemSidebar;
