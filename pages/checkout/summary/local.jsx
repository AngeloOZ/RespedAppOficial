import { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import { setCookies } from "cookies-next";

import { ShopLayout } from "../../../components/layouts/ShopLayout";
import { CartList } from "../../../components/cart/CartList";
import { checkout } from "../../../functions";
import { SummaryLocal } from "../../../components/checkout";
import { FullScreenloader } from "../../../components/Components";
import { useHandleOrders } from "../../../Hooks";

const numeroMesas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SummaryLocalPage = ({ order }) => {
  const [displayLoader, setDisplayLoader] = useState(false);
  const [numeroMesa, setNumeroMesa] = useState("");
  const [errorChoseTable, setErrorChoseTable] = useState(false);
  const [textNote, setTextNote] = useState("");
  const { registerOrderLocal, cancelOrder } = useHandleOrders(
    {
      IDPEDIDOTOTAL: order.IDPEDIDOTOTAL,
      MESA: numeroMesa,
      NOTE: textNote,
    },
    setDisplayLoader
  );

  const handleChangeNote = (event) => {
    setTextNote(event.target.value);
  };

  const handleChoseTable = (event) => {
    setNumeroMesa(event.target.value);
    setErrorChoseTable(false);
  };

  const handleSubmitOrder = () => {
    if (numeroMesa) {
      registerOrderLocal();
    }else{
      setErrorChoseTable(true);
    }
  };

  return (
    <ShopLayout
      title="Resumen de orden de reservación"
      pageDescription={"Resumen de la orden en local"}
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
              <SummaryLocal order={order}>
                <FormControl
                  fullWidth
                  margin="dense"
                  required
                  error={errorChoseTable}
                >
                  <InputLabel id="demo-simple-select-label">
                    Seleccione una mesa
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Seleccione una mesa"
                    value={numeroMesa}
                    onChange={handleChoseTable}
                  >
                    <MenuItem disabled value="0">Seleccione una mesa</MenuItem>
                    {numeroMesas.map((num) => (
                      <MenuItem key={num} value={num}>
                        {`Mesa: ${num}`}
                      </MenuItem>
                    ))}
                  </Select>
                  {errorChoseTable ? (
                    <FormHelperText>Debe seleccionar una mesa</FormHelperText>
                  ) : (
                    <></>
                  )}
                </FormControl>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Notas para la orden"
                  fullWidth
                  multiline
                  maxRows={4}
                  margin="dense"
                  placeholder={"El restaurante intentara seguirlas"}
                  value={textNote}
                  onChange={handleChangeNote}
                />
              </SummaryLocal>
              <Box sx={{ mt: 2 }}>
                <Button
                  color="success"
                  className="circular-btn"
                  fullWidth
                  onClick={handleSubmitOrder}
                >
                  Confirmar Orden
                </Button>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Button
                  color="error"
                  className="circular-btn"
                  fullWidth
                  onClick={()=>cancelOrder(order.IDPEDIDOTOTAL)}
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
export default SummaryLocalPage;

export const getServerSideProps = async ({ req, res }) => {
  const pathRedirect = {
    redirect: {
      destination: "/menu",
      permanent: false,
    },
  };
  const itemsCart = checkout.getItemsCart(req);
  const summaryOrder = checkout.getSummaryOrderCookie(req);
  const token = checkout.getToken(req);

  if (itemsCart && token) {
    try {
      let order = summaryOrder;
      if (!summaryOrder) {
        order = await checkout.postCurrentOrder(itemsCart, token);
        setCookies("summary_order", JSON.stringify(order), { req, res });
      }
      if (order) {
        return {
          props: {
            order,
          },
        };
      }
      throw new Error("Error mio");
    } catch (error) {
      console.log(error);
      return pathRedirect;
    }
  } else {
    return pathRedirect;
  }
};
