import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Modal,
} from "@mui/material";

import { FullScreenloader } from "../../Components";
import { StateOfReservation } from "./StateOfReservation";

export const TableReservation = ({ reservations }) => {
  return (
    <TableContainer component={Paper}>
      {console.log(reservations)}
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Número de reservación</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Hora</TableCell>
            <TableCell align="center">Personas</TableCell>
            <TableCell width={50}>Notas</TableCell>
            <TableCell>Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations.map((reserva) => (
            <TableRow
              key={reserva.IDRESERVA}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{reserva.NUMRESERVA}</TableCell>
              <TableCell>{reserva.RESERVATIONDATE}</TableCell>
              <TableCell>{reserva.RESERVATIONTIME}</TableCell>
              <TableCell align="center">{reserva.PEOPLE}</TableCell>
              <TableCell width={50}>
                {reserva.NOTE}
              </TableCell>
              <TableCell>{<StateOfReservation state={reserva.IDSTATE} />}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
