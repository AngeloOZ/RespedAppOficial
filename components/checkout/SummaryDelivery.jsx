import { useState } from "react";
import NextLink from "next/link";
import { Box, Divider, Grid, Link, TextField, Typography } from "@mui/material";

export const SummaryDelivery = ({ order, address, children}) => {
  
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h2">Orden Nro:</Typography>
        <Typography variant="h2" textAlign={"end"}>
          {order.NUMPEDIDO}
        </Typography>
      </Box>
      <Typography variant="h3" fontWeight={400} mt={2}>
        Resumen
      </Typography>
      <Divider sx={{ my: 1 }} />

      <Box display="flex" justifyContent="space-between">
        <Typography variant="subtitle1">Dirección de entrega</Typography>
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
      <Divider sx={{ my: 1 }} />
      {children}
    </>
  );
};
