import { ItemMenu } from "./ItemMenu";

export const GridItemsMenu = ({ productos }) => {
  return (
    <div className="row g-5">
      {productos.map((producto) => (
        <ItemMenu key={producto.idProducto} producto={producto} />
      ))}
    </div>
  );
};
