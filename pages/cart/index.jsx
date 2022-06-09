import NextLink from "next/link";

import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Modal,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import { CartList, OrderSummary } from "../../components/cart";
import { ShopLayout } from "../../components/layouts/ShopLayout";
import { generateUUID } from "../../helpers/generateUUID";

const style = (theme) => ({
  width: 450,
  bgcolor: theme.palette.mode === "dark" ? "#fff" : "white",
  border: "2px solid currentColor",
  padding: "16px 32px 24px 32px",
});

const styleModal = {
  position: "fixed",
  zIndex: 1300,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const CartPage = () => {
  const [numeroOrden, setNumeroOrden] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    setNumeroOrden(generateUUID());
  }, []);

  return (
    <ShopLayout
      title="Carrito - 3"
      pageDescription={"Carrito de compras de la tienda"}
    >
      <Typography variant="h1" component="h1" my={3}>
        Carrito
      </Typography>

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList editable />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h2">Orden Nro:</Typography>
                <Typography>{numeroOrden}</Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Button
                  color="success"
                  className="circular-btn"
                  fullWidth
                  onClick={handleOpenModal}
                >
                  Checkout
                </Button>
              </Box>
              <Box sx={{ mt: 1 }}>
                <NextLink href="/orders" passHref>
                  <Link>
                    <Button color="error" fullWidth>
                      Regresar
                    </Button>
                  </Link>
                </NextLink>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={openModal}
        onClose={handleOpenModal}
        style={styleModal}
      >
        <Box sx={style}>
          <h2 id="unstyled-modal-title">¿Dónde te encuentras?</h2>
          <Box mt={2}>
            <Button variant="contained" fullWidth>En el local</Button>
          </Box>
          <Box mt={2}>
            <Button variant="contained" fullWidth>A domicilio</Button>
          </Box>
        </Box>
      </Modal>
    </ShopLayout>
  );
};

export default CartPage;
