import { AccordionItem, TableOrders } from "../../components/Cliente";
import { ClienteLayout } from "../../components/layouts/ClienteLayout";

const ProfilePage = () => {
  return (
    <ClienteLayout>
      <AccordionItem title={"Ordenes locales"}>
        <h1>Holaaaa</h1>
      </AccordionItem>
      <AccordionItem title={"Ordenes a domicilio"}>
        <h1>Holaaaa</h1>
      </AccordionItem>
      <AccordionItem title={"Ordenes en  reservas"}>
        <h1>Holaaaa</h1>
      </AccordionItem>
    </ClienteLayout>
  );
};

export default ProfilePage;
