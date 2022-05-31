import Link from "next/link";
import { useRouter } from "next/router";
import css from "./Menu.module.scss";

export const MenuCategorias = ({ categorias }) => {
  const { asPath } = useRouter();

  return (
    <div className={css.categorias}>
      <ul>
        <Link href="/menu" passHref>
          <li className={asPath == "/menu" ? css.active : ""}>Todas</li>
        </Link>
        {categorias.map((category) => {
          const uri = `/menu/${category.NAME.toLowerCase()}`;
          return (
            <Link href={uri} passHref key={category.IDCATEGORIA}>
              <li className={asPath == uri ? css.active : ""}>
                {category.NAME}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
