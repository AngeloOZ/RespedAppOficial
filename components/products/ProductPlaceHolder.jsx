import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box, style } from "@mui/system";

export const ProductPlaceHolder = () => {
  return (
    <Grid
      container
      spacing={4}
      justifyContent={{ md: "center" }}
      style={{ marginTop: 0 }}
    >
      <Grid item xs={12} sm={6} md={5} lg={4}>
        <Card>
          <Box height={200} component="div" className="placeholder-item"></Box>
          <CardContent>
            <Typography
              gutterBottom
              variant="h3"
              height={20}
              className="placeholder-item"
              component="div"
            ></Typography>
            <Typography
              gutterBottom
              variant="h3"
              mt={1.5}
              height={50}
              className="placeholder-item"
              component="div"
            ></Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={5} lg={4}>
        <Card>
          <Box height={200} component="div" className="placeholder-item"></Box>
          <CardContent>
            <Typography
              gutterBottom
              variant="h3"
              height={20}
              className="placeholder-item"
              component="div"
            ></Typography>
            <Typography
              gutterBottom
              variant="h3"
              mt={1.5}
              height={50}
              className="placeholder-item"
              component="div"
            ></Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={5} lg={4}>
        <Card>
          <Box height={200} component="div" className="placeholder-item"></Box>
          <CardContent>
            <Typography
              gutterBottom
              variant="h3"
              height={20}
              className="placeholder-item"
              component="div"
            ></Typography>
            <Typography
              gutterBottom
              variant="h3"
              mt={1.5}
              height={50}
              className="placeholder-item"
              component="div"
            ></Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
