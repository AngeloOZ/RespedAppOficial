import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import { TableAddress } from "../../components/Cliente";
import { ClienteLayout } from "../../components/layouts/ClienteLayout";
import { useAddress } from "../../Hooks/useAddress";

const AddressPage = () => {
  const { addresses, isLoading } = useAddress();
  const [openModal, setopenModal] = useState(false);

  return (
    <ClienteLayout>
      <Box
        component={"div"}
        display={"flex"}
        justifyContent={"space-between"}
        my={1}
      >
        <Typography component="h1" fontWeight={700} fontSize={26}>
          Direcciones
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => setopenModal(!openModal)}
        >
          Agregar dirección
        </Button>
      </Box>
      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableAddress
          addresess={addresses?.data || []}
          open={openModal}
          setOpen={setopenModal}
        />
      )}
    </ClienteLayout>
  );
};

export default AddressPage;
