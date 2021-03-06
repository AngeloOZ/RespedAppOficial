
export const NavbarTop = ({ setOpenSidebar }) => {
  const handleClickBars = () => {
    setOpenSidebar((active) => !active);
  };

  return (
    <div className="admin-topbar">
      <div className="admin-toggle" onClick={handleClickBars}>
        <ion-icon name="menu-outline"></ion-icon>
      </div>
    </div>
  );
};
