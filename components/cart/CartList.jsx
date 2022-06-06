import NextLink from "next/link";
import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";

const productsInCart = [
  "https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1652393339/website/61e1c889d30b4f841271c899_image-6-menu-qrcode-template-p-1080_qovxpe.jpg",
  "https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1652393339/website/61e1c889d30b4f841271c899_image-6-menu-qrcode-template-p-1080_qovxpe.jpg",
  "https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1652393339/website/61e1c889d30b4f841271c899_image-6-menu-qrcode-template-p-1080_qovxpe.jpg",
];

export const CartList = ({ editable = false }) => {
  return (
    <>
      {productsInCart.map((product, i) => (
        <Grid container spacing={2} key={i} sx={{ mb: 1 }}>
          <Grid item xs={3}>
            <CardActionArea>
              <CardMedia
                image={product}
                component="img"
                sx={{ borderRadius: "5px" }}
              />
            </CardActionArea>
          </Grid>
          <Grid item xs={7}>
            <Box display="flex" flexDirection="column">
              <Typography variant="body1">{product.title}</Typography>
              <Typography variant="body1">
                Talla: <strong>M</strong>
              </Typography>

              {editable ? <></> : <Typography variant="h5">3 items</Typography>}
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Typography variant="subtitle1">{`$230`}</Typography>
          </Grid>
        </Grid>
      ))}
    </>
  );
};
