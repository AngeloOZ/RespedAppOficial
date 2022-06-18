
import { Table, TableRow, TableCell, TableContainer, TableHead, TableBody, Modal, Button, TextField, makeStyles} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Acciones } from './Acciones';



 const DataTableReserva = ({reservas,tipo}) => {
  if (reservas === undefined) {
    reservas= [];
}
  return (
    <div style={{ height: 700, width: '100%' }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No Reserva</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Personas</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Hora</TableCell>
              <TableCell>Estado</TableCell>
              {(tipo!=3) ? <TableCell>Acciones</TableCell> : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {
               reservas.map(reserva => (
                <TableRow key={reserva.IDRESERVA}>
                  <TableCell>{reserva.NUMRESERVA}</TableCell>
                  <TableCell>{reserva.NAME}</TableCell>
                  <TableCell>{reserva.PEOPLE}</TableCell>
                  <TableCell>{reserva.RESERVATIONDATE}</TableCell>
                  <TableCell>{reserva.RESERVATIONTIME}</TableCell>
                  <TableCell>{reserva.STATE}</TableCell>
                  {(tipo!=3) ? <Acciones/> : null}
                </TableRow>
              ))
            }
          </TableBody>

        </Table>

      </TableContainer>
    </div>
  )
}


export default DataTableReserva;
