import ItemSidebar from "../../ComponentsAdmin/ItemSidebar";

export const SideMenuClient = ({ showSide }) => {
  return (
    <div className={`admin-navigation ${showSide && "active"}`}>
      <ul>
        <li>
          <a href="#">
            <span className="admin-icon">
              <ion-icon name="logo-apple"></ion-icon>
            </span>
            <span className="admin-title">El Fogón de COZ</span>
          </a>
        </li>
        <ItemSidebar
          href="/cliente"
          name="Perfil"
          icon="person-circle-outline"
        />
        <ItemSidebar
          href="/cliente/ordenes"
          name="Ordenes"
          icon="fast-food-outline"
        />
        <ItemSidebar
          href="/cliente/direcciones"
          name="Direcciones"
          icon="map-outline"
        />
        <ItemSidebar href="/" name="Sign Out" icon="log-out-outline" />
      </ul>
    </div>
  );
};
