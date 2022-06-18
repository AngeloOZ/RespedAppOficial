import { Box, Grid, List, Typography } from "@mui/material";
import { ItemAddress } from "./ItemAddress";

export const ListAddress = ({ addresses }) => {
  return (
    <Grid item xs={8}>
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
        <List sx={{ width: "100%", padding: 0 }}>
          {addresses.map((address) => (
            <ItemAddress address={address} key={address.IDDIRECCION} />
          ))}
        </List>
      </Box>
    </Grid>
  );
};
