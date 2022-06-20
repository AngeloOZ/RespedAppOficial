import { Box, Grid, List, Typography } from "@mui/material";
import { ItemAddress } from "./ItemAddress";

export const ListAddress = ({ addresses }) => {
  return (
    <Grid item xs={12} md={8} >
      <Box>
        <Typography
          variant="h2"
          fontSize={24}
          fontWeight="bold"
          component="h2"
          mb={2}
        >
          Seleccione la Dirección de Envío
        </Typography>
        <List
          className="customScrollBar"
          sx={{ width: "100%", padding: 0, overflow: "auto", maxHeight: 380 }}
        >
          {addresses.map((address) => (
            <ItemAddress address={address} key={address.IDDIRECCION} />
          ))}
        </List>
      </Box>
    </Grid>
  );
};
