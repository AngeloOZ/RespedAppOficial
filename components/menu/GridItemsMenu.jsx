import { ItemMenu } from "./ItemMenu";
import { useFilterProductos } from "../../Hooks/useFilterProductos";

export const GridItemsMenu = ({ productos, selectedCategory }) => {
  const filterProductos = useFilterProductos({
    products: productos,
    category: selectedCategory,
  });

  return (
    <div className="row g-5">
      {filterProductos.map((prod) => (
        <ItemMenu key={prod.idProducto} producto={prod} />
      ))}
    </div>
  );
};
