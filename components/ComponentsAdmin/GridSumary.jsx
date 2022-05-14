import { ItemSumary } from "./ItemSumary";

export const GridSumary = () => {
  return (
    <div className="dash-cardBox">
      <ItemSumary number="1,504" name="Daily Views" icon="eye-outline" />
      <ItemSumary number="80" name="Sales" icon="cart-outline" />
      <ItemSumary number="284" name="Comments" icon="chatbubbles-outline" />
      <ItemSumary number="7,842" name="Earning" icon="cash-outline" />
    </div>
  );
};
