import { useState, useContext, useEffect } from "react";

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
import { checkout } from "../../functions";
import { FullScreenloader } from "../../components/Components/FullScreenloader/FullScreenloader";
import { AuthContext, CartContext } from "../../context";

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

const CartPage = ({ numbsOfItemsCart, reservation, isEdit }) => {
  const { rol } = useContext(AuthContext);
  const { numberOfItems } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);
  const [itemsCart, setItemsCart] = useState(numbsOfItemsCart);
  const [displayLoader, setDisplayLoader] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  useEffect(() => {
    setItemsCart(numberOfItems);
  }, [numberOfItems]);

  return (
    <ShopLayout
      title={`Carrito - ${itemsCart}`}
      pageDescription={"Carrito de compras de la tienda"}
    >
      <FullScreenloader display={displayLoader} />
      <Typography variant="h1" component="h1" my={3}>
        Carrito
      </Typography>

      <Grid container>
        <Grid item xs={12} md={7}>
          <CartList editable={isEdit} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Card className="summary-card">
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h2">Resumen de orden</Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <OrderSummary />
              {numberOfItems > 0 && (
                <Box sx={{ mt: 3 }}>
                  {reservation ? (
                    <NextLink href="/checkout/summary/reservacion" passHref>
                      <Link>
                        <Button
                          color="success"
                          className="circular-btn"
                          fullWidth
                          onClick={() => setDisplayLoader(true)}
                        >
                          Continuar
                        </Button>
                      </Link>
                    </NextLink>
                  ) : rol == process.env.NEXT_PUBLIC_TIPO_MESERO ? (
                    <NextLink href="/checkout/summary/local" passHref>
                      <Link>
                        <Button
                          color="success"
                          className="circular-btn"
                          fullWidth
                          onClick={() => setDisplayLoader(true)}
                        >
                          Continuar
                        </Button>
                      </Link>
                    </NextLink>
                  ) : (
                    <Button
                      color="success"
                      className="circular-btn"
                      fullWidth
                      onClick={handleOpenModal}
                    >
                      Continuar
                    </Button>
                  )}
                </Box>
              )}
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
          mt={0}
        >
          <Grid item xs={12}>
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <NextLink href="/checkout/address" passHref>
              <Link>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<MopedOutlinedIcon />}
                  size="large"
                  onClick={() => setDisplayLoader(true)}
                >
                  Domicilio
                </Button>
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={12} sm={6}>
            <NextLink href="/checkout/summary/local" passHref>
              <Link>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<FoodBankOutlinedIcon />}
                  size="large"
                  onClick={() => setDisplayLoader(true)}
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
  const items = checkout.getItemsCart(req);
  const reservation = checkout.getReservationCookies(req);
  const existOrder = checkout.existSummaryOrder(req);

  if (!items) {
    return {
      redirect: {
        destination: "/cart/empty",
        permanent: false,
      },
    };
  }
  return {
    props: {
      numbsOfItemsCart: items.length,
      reservation: !!reservation,
      isEdit: !existOrder,
    },
  };
};
