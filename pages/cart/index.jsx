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
import { useEffect, useState } from "react";
import { CartList, OrderSummary } from "../../components/cart";
import { ShopLayout } from "../../components/layouts/ShopLayout";
import { generateUUID } from "../../helpers/generateUUID";

const CartPage = () => {
  const [numeroOrden, setNumeroOrden] = useState("");

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
                <Button color="success" className="circular-btn" fullWidth>
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
    </ShopLayout>
  );
};

export default CartPage;
