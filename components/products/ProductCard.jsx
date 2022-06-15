import { useContext } from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import { ButtonCart } from "../Components/buttonAnimate/ButtonCart";
import { CartContext } from "../../context";

const styleC = {
  position: "absolute",
  right: 14,
  top: 155,
  background: "rgba(0,0,0,0.85)",
  padding: "5px 10px",
  color: "white",
  borderRadius: "10px",
  userSelect: "none",
};

export const ProductCard = ({ product }) => {
  const { addProductToCart } = useContext(CartContext);

  const addCurrentProduct = () => {
    const newProduct = {
      idItem: new Date().getTime(),
      idProduct: product.IDPRODUCTO,
      name: product.NAME,
      price: product.PRICE,
      image: product.IMAGE,
    };
    addProductToCart(newProduct);
  };

  return (
    <Grid item xs={12} sm={6} md={5} lg={4} className="fadeIn">
      <Card style={{ position: "relative" }}>
        <CardMedia
          component="img"
          height={200}
          image={product.IMAGE}
          alt={product.NAME}
        />
        <Typography style={styleC} variant="subtitle1" component="div">
          $ {product.PRICE} USD
        </Typography>
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {product.NAME}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.DETAIL}
          </Typography>
        </CardContent>
        <CardActions style={{ display: "flex", justifyContent: "center" }}>
          <ButtonCart
            style={{ padding: "20px 10px", width: "250px" }}
            onClick={addCurrentProduct}
          />
        </CardActions>
      </Card>
    </Grid>
  );
};
