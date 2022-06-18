import ItemSidebar from "./ItemSidebar";

export const SidebarAdmin = ({ showSide }) => {
  return (
    <div className={`admin-navigation ${showSide && "active"}`}>
      <ul>
        <li>
          <a href="#">
            <span className="admin-icon">
              <ion-icon name="logo-apple"></ion-icon>
            </span>
            <span className="admin-title">El fogón de COZ</span>
          </a>
        </li>
        <ItemSidebar
          href="/admin/dashboard"
          name="Dashboard"
          icon="grid-outline"
        />
        <ItemSidebar
          href="/admin/usuarios"
          name="Usuarios"
          icon="people-outline"
        />
        <ItemSidebar
          href="/admin/pedidos"
          name="Pedidos"
          icon="create-outline"
        />
        <ItemSidebar
          href="/admin/reservas"
          name="Reservas"
          icon="calendar-outline"
        />
         <ItemSidebar
          href="/admin/productos"
          name="Productos"
          icon="fast-food-outline"
        />
        <ItemSidebar
          href="/"
          name="Sign Out"
          icon="log-out-outline"
        />
      </ul>
    </div>
  );
};
