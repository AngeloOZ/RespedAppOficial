import { useState, useContext } from "react";
import { CartContext } from "../../context";

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

import { setCookies } from "cookies-next";
import axios from "axios";

import { ShopLayout } from "../../components/layouts/ShopLayout";
import { CartList } from "../../components/cart/CartList";
import { checkout } from "../../functions";
import { SummaryDelivery } from "../../components/checkout";

const Summary = ({ address, order }) => {
  const [textNote, setTextNote] = useState("");
  const { emptyCart } = useContext(CartContext);

  const handleChangeNote = (event) => {
    setTextNote(event.target.value);
  };

  const handleSubmitOrder = () => {
    const dataOrder = {
      IDPEDIDOTOTAL: order.IDPEDIDOTOTAL,
      IDRELACIONUD: address.IDRELACIONUD,
      NOTE: textNote,
    };
    emptyCart();
    axios
      .post("/pedido/domicilio", dataOrder)
      .then((response) => response.data)
      .then(console.log)
      .catch(console.error);
  };
  return (
    <ShopLayout
      title="Resumen de orden"
      pageDescription={"Resumen de la orden"}
    >
      <Grid container>
        <Grid item xs={12} sm={7}>
        <Typography variant="h1" component="h1" mb={2}>
          Resumen de la orden
        </Typography>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <SummaryDelivery
                address={address}
                order={order}
                value={textNote}
                setValue={handleChangeNote}
              />
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
