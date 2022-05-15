import Link from "next/link";
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
            <span className="admin-title">Brand Name</span>
          </a>
        </li>
        <ItemSidebar
          href="/admin/dashboard"
          name="Dashboard"
          icon="grid-outline"
        />
        <ItemSidebar
          href="/admin"
          name="Blank"
          icon="home-outline"
        />
        <ItemSidebar
          href="#"
          name="Customers"
          icon="people-outline"
        />
        <ItemSidebar
          href="#"
          name="Messages"
          icon="chatbubble-outline"
        />
        <ItemSidebar
          href="#"
          name="Settings"
          icon="settings-outline"
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
