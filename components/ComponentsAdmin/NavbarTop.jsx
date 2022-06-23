// TODO: Arreglar el componente imagen
export const NavbarTop = ({ setOpenSidebar }) => {
  const handleClickBars = () => {
    setOpenSidebar((active) => !active);
  };

  return (
    <div className="admin-topbar">
      <div className="admin-toggle" onClick={handleClickBars}>
        <ion-icon name="menu-outline"></ion-icon>
      </div>
      <div className="admin-user">
        <img
          src="https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1655956311/website/customer01_iuu0ub.jpg"
          alt="Hola"
        />
      </div>
    </div>
  );
};
