import { useContext } from "react";

import { useRouter } from "next/router";
import { CartContext } from "../../context";

import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { RenderIf } from "../Components/RenderIf";

export const CartList = ({ editable = false }) => {
  const { cart, removeCartProduct } = useContext(CartContext);
  return (
    <>
      {cart.map((item) => (
        <Grid container spacing={2} key={item.idItem} sx={{ mb: 1.5 }}>
          <Grid item xs={3}>
            <CardActionArea>
              <CardMedia
                image={item.image}
                component="img"
                sx={{ borderRadius: "5px" }}
              />
            </CardActionArea>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1" fontWeight={600}>
              {item.name}
            </Typography>
          </Grid>
          <Grid
            item
            xs={2}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Typography
              variant="subtitle1"
              mb={1}
            >{`$${item.price}`}</Typography>
            <RenderIf isTrue={editable}>
              <Button variant="outlined" color="secondary" onClick={()=>removeCartProduct(item.idItem)}>
                Remover
              </Button>
            </RenderIf>
          </Grid>
        </Grid>
      ))}
    </>
  );
};
