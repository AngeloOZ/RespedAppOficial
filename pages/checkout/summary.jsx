import NextLink from "next/link";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";

import { setCookies } from "cookies-next";
import axios from "axios";

import { ShopLayout } from "../../components/layouts/ShopLayout";
import { CartList } from "../../components/cart/CartList";
import { checkout } from "../../functions";

const Summary = ({ address, order }) => {
  const handleSubmitOrder = () => {
    const dataOrder = {
      IDPEDIDOTOTAL: order.IDPEDIDOTOTAL,
      IDRELACIONUD: address.IDRELACIONUD,
      NOTE: "",
    };

    axios.post("/pedido/domicilio", dataOrder)
    .then(response => response.data)
    .then(console.log)
    .catch(console.error);
  };
  return (
    <ShopLayout
      title="Resumen de orden"
      pageDescription={"Resumen de la orden"}
    >
      <Typography variant="h1" component="h1" mb={1}>
        Resumen de la orden
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Orden Nro: {order.NUMPEDIDO}</Typography>
              <Typography variant="h3" fontWeight={400} mt={2}>
                Resumen
              </Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">
                  Dirección de entrega
                </Typography>
                <NextLink href="/checkout/address" passHref>
                  <Link underline="always">Editar</Link>
                </NextLink>
              </Box>

              <Typography>{address.NAME}</Typography>
              <Typography>{address.STREET1}</Typography>
              <Typography>{address.STREET2}</Typography>
              <Typography>{address.REFERENCE}</Typography>
              <Typography>{address.PHONEDIR}</Typography>

              <Divider sx={{ my: 1 }} />

              <Grid container>
                <Grid item xs={6}>
                  <Typography>Cantidad</Typography>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="end">
                  <Typography>{order.NUMITEMS} productos </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Total:</Typography>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="end">
                  <Typography variant="subtitle1">{`$${order.VALORTOTAL}`}</Typography>
                </Grid>
              </Grid>

              <Box sx={{ mt: 3 }}>
                <Button
                  color="secondary"
                  className="circular-btn"
                  fullWidth
                  onClick={handleSubmitOrder}
                >
                  Confirmar Orden
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default Summary;

export const getServerSideProps = async ({ req, res, query }) => {
  const pathRedirect = {
    redirect: {
      destination: "/menu",
      permanent: false,
    },
  };
  const itemsCart = checkout.getItemsCart(req);
  const summaryOrder = checkout.getSummaryOrderCookie(req);
  const token = checkout.getToken(req);
  const addressInfo = checkout.getInformationAddres(query);

  if (itemsCart && token && addressInfo) {
    try {
      const address = await checkout.getAddressUserByID(
        addressInfo.idAdress,
        token
      );
      let order = summaryOrder;
      if (!summaryOrder) {
        order = await checkout.postCurrentOrder(itemsCart, token);
        setCookies("summary_order", JSON.stringify(order), { req, res });
      }
      if (address && order) {
        address.IDRELACIONUD = addressInfo.idRelacion;
        return {
          props: {
            address,
            order,
          },
        };
      }
      throw new Error("Error mio");
    } catch (error) {
      return pathRedirect;
    }
  } else {
    return pathRedirect;
  }
};
