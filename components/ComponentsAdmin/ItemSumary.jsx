export const ItemSumary = ({number, name, icon}) => {
  return (
    <div className="dash-card">
      <div>
        <div className="dash-numbers">{number}</div>
        <div className="dash-cardName">{name}</div>
      </div>
      <div className="dash-iconBx">
        <ion-icon name={icon}></ion-icon>
      </div>
    </div>
  );
};
