import { Button, Grid, TextField, Typography } from "@mui/material";

export const AddAddress = () => {
  return (
    <Grid item xs={12} md={4}>
      <Typography
        variant="h2"
        fontSize={24}
        mb={2}
        mt={{ xs: 5, md: 0 }}
        fontWeight="bold"
        component="h2"
      >
        Registrar Dirección
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            label="Nombre de la dirección"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Calle principal" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Calle secundaria" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Teléfono" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Referencia"
            variant="filled"
            multiline
            rows={2}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button size="large" fullWidth>
            Guardar dirección
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
