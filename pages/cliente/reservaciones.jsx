import { Box, CircularProgress, Typography } from "@mui/material";
import { ClienteLayout } from "../../components/layouts/ClienteLayout";
import { useReservasClient } from "../../Hooks";

const ReservacionesPage = () => {
  const { reservas, isLoading } = useReservasClient();

  return (
    <ClienteLayout>
      <Box
        component={"div"}
        display={"flex"}
        justifyContent={"space-between"}
        my={1}
      >
        <Typography component="h1" fontWeight={700} fontSize={26}>
          Mis reservaciones
        </Typography>
      </Box>
      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
         console.log(reservas)
      //   <TableAddress
      //     addresess={addresses?.data || []}
      //     open={openModal}
      //     setOpen={setopenModal}
      //   />
      )}
    </ClienteLayout>
  );
};

export default ReservacionesPage;
