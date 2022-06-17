import { Box, Grid, List, Typography } from "@mui/material";

import { ItemAddress } from "./ItemAddress";

export const ListAddress = () => {
  return (
    <Grid xs={8} item>
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
          <ItemAddress defaultAddress={true} />
        </List>
      </Box>
    </Grid>
  );
};
