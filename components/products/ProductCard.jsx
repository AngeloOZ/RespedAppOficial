import {
  Card,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import AddShoppingCartOutlinedIcon  from "@mui/icons-material/AddShoppingCartOutlined";
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';

export const ProductCard = ({ product }) => {
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
  return (
    <Grid item xs={12} sm={6} md={5} lg={4}>
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
        <Divider />
        <CardActions style={{display: "flex", justifyContent:"center"}}>
          <Button
            variant="contained"
            startIcon={<ShoppingCartCheckoutOutlinedIcon />}
          >
            Agregar al carrito
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
