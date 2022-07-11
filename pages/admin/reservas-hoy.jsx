import { useContext } from "react";
import { Card, CardHeader, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { AdminLayout } from "../../components/layouts/AdminLayout";
import { useReservas } from "../../Hooks";
export default function OrdenesActivas() {
  const reservasHoy = useReservas("hoy").reservas;
  let reservas = reservasHoy ? reservasHoy : [];
  console.log(reservasHoy)
  return (
    <AdminLayout>
      <Grid container spacing={2}>
        <div style={{ width: '100%' }}>
          <Paper sx={{ margin: 2 }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{
                    backgroundColor: "orange"
                  }}>
                    <TableCell sx={{
                    color: "white"
                  }}>No Reserva </TableCell>
                    <TableCell sx={{
                    color: "white"
                  }}> Hora </TableCell>
                    <TableCell sx={{
                    color: "white"
                  }}> Nombre</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    reservas.map((reserva, index) =>
                      <TableRow key={index}>
                        <TableCell>{reserva.NUMRESERVA}</TableCell>
                        <TableCell>{reserva.HORA}</TableCell>
                        <TableCell>{reserva.NOMBRE}</TableCell>
                      </TableRow>
                    )
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </Grid>

    </AdminLayout>
  );
}
