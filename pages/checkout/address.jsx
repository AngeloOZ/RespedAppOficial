import { Box, Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts/ShopLayout"

const addressPage = () => {
   return (
      <ShopLayout title="Dirección" pageDescription="Confirmar dirección del destino" imageFullUrl="" categories={[]}>
         <Typography variant="h1" component='h1'>Agregar dirección</Typography>

         <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={12}>
               <TextField label='Nombre de la dirección' variant="filled" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
               <TextField label='Calle principal' variant="filled" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
               <TextField label='Calle secundaria' variant="filled" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
               <TextField label='Teléfono' variant="filled" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
               <TextField label='Referencia' variant="filled" fullWidth />
            </Grid>
         </Grid>

         <Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
            <Button color="secondary" className="circular-btn" size="large">
               Revisar pedido
            </Button>
         </Box>
      </ShopLayout>
   )
}

export default addressPage