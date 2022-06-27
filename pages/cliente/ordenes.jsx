import { Box, CircularProgress } from "@mui/material";
import { AccordionItem, DataTableOders } from "../../components/Cliente";
import { ClienteLayout } from "../../components/layouts/ClienteLayout";
import { useGetOrders } from "../../Hooks";

const OrdenesPage = () => {
  const { GetOrdersLocal, GetOrdersReservation, GetOrdersDelivery } =
    useGetOrders();
  const { ordersLocal, isLoading: isLoadingLocal } = GetOrdersLocal();
  const { ordersReserva, isLoading: isLoadingReserva } = GetOrdersReservation();
  const { ordersDelivery, isLoading: isLoadingDelivery } = GetOrdersDelivery();

  return (
    <ClienteLayout>
      {console.log(ordersDelivery)}
      <AccordionItem title={"Ordenes locales"}>
        {isLoadingLocal ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        ) : (
          <DataTableOders pedidos={ordersLocal || []} tipo={1} />
        )}
      </AccordionItem>
      <AccordionItem title={"Ordenes a domicilio"}>
        {isLoadingDelivery ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        ) : (
          <DataTableOders pedidos={ordersDelivery || []} tipo={2} />
        )}
      </AccordionItem>
      <AccordionItem title={"Ordenes en  reservas"}>
        {isLoadingReserva ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        ) : (
          <DataTableOders pedidos={ordersReserva || []} tipo={3} />
        )}
      </AccordionItem>
    </ClienteLayout>
  );
};

export default OrdenesPage;
