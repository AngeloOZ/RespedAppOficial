import { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import { setCookies } from "cookies-next";

import { ShopLayout } from "../../../components/layouts/ShopLayout";
import { CartList } from "../../../components/cart/CartList";
import { checkout } from "../../../functions";
import { SummaryDelivery } from "../../../components/checkout";
import { FullScreenloader } from "../../../components/Components";
import { useHandleOrders } from "../../../Hooks";

const Summary = ({ address, order }) => {
  const [displayLoader, setDisplayLoader] = useState(false);
  const [textNote, setTextNote] = useState("");
  const { registerOrder, cancelOrder } = useHandleOrders(
    {
      IDPEDIDOTOTAL: order.IDPEDIDOTOTAL,
      IDRELACIONUD: address.IDRELACIONUD,
      NOTE: textNote,
    },
    setDisplayLoader
  );

  const handleChange = (event) => {
    setTextNote(event.target.value);
  };

  return (
    <ShopLayout
      title="Resumen de orden a domicilio"
      pageDescription={"Resumen de la orden  a domicilio"}
    >
      <FullScreenloader display={displayLoader} />
      <Grid container>
        <Grid item xs={12} sm={7}>
          <Typography variant="h1" component="h1" mb={2}>
            Resumen de la Orden
          </Typography>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <SummaryDelivery address={address} order={order}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Notas para la orden"
                  fullWidth
                  multiline
                  maxRows={4}
                  margin="dense"
                  placeholder={"El restaurante intentara seguirlas"}
                  value={textNote}
                  onChange={handleChange}
                />
              </SummaryDelivery>
              <Box sx={{ mt: 2 }}>
                <Button
                  color="success"
                  className="circular-btn"
                  fullWidth
                  onClick={registerOrder}
                >
                  Confirmar Orden
                </Button>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Button
                  color="error"
                  className="circular-btn"
                  fullWidth
                  onClick={() => cancelOrder(order.IDPEDIDOTOTAL)}
                >
                  Cancelar Orden
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
