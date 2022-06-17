import { useState } from "react";

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

import MopedOutlinedIcon from "@mui/icons-material/MopedOutlined";
import FoodBankOutlinedIcon from "@mui/icons-material/FoodBankOutlined";

import { CartList, OrderSummary } from "../../components/cart";
import { ShopLayout } from "../../components/layouts/ShopLayout";

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
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <ShopLayout
      title="Carrito"
      pageDescription={"Carrito de compras de la tienda"}
    >
      <Typography variant="h1" component="h1" my={3}>
        Carrito
      </Typography>

      <Grid container>
        <Grid item xs={12} md={7}>
          <CartList editable />
        </Grid>
        <Grid item xs={12} md={5}>
          <Card className="summary-card">
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h2">Resumen de orden</Typography>
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
        <Grid
          className="itemModal"
          container
          rowSpacing={1}
          columnSpacing={{ sm: 1 }}
        >
          <Typography
            variant="h1"
            component="div"
            mb={1.5}
            mx="auto"
            color="#000"
            textAlign="center"
          >
            ¿Dónde te encuentras?
          </Typography>
          <Grid item xs={12} sm={6}>
            <NextLink href="/checkout/summary" passHref>
              <Link>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<MopedOutlinedIcon />}
                  size="large"
                >
                  Domicilio
                </Button>
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={12} sm={6}>
            <NextLink href="/checkout/summary" passHref>
              <Link>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<FoodBankOutlinedIcon />}
                  size="large"
                >
                  En el local
                </Button>
              </Link>
            </NextLink>
          </Grid>
        </Grid>
      </Modal>
    </ShopLayout>
  );
};

export default CartPage;

export const getServerSideProps = async ({ req }) => {
  const cookies = req.cookies;
  const cart = cookies.cart ? JSON.parse(cookies.cart) : [];

  if (cart.length == 0) {
    return {
      redirect: {
        destination: "/cart/empty",
      },
    };
  }

  return {
    props: {},
  };
};
