import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { Table, TableRow, TableCell,Select, TableContainer, TableHead, TableBody, Modal, Button, Box, MenuItem, Typography,Chip,FormControl,InputLabel} from '@mui/material';

import { useState } from 'react';

 const DataTableReserva = ({reservas,tipo}) => {
  const [data, setData]=useState([]);
  const url = '/reserva/'
  const [reservaSeleccionade, setReservaSeleccionade]=useState({
    IDRESERVA:'',
    IDSTATE: ''
  })

  const handleChange=e=>{
    let value = e.target.value;
    let name = e.target.name;
    setReservaSeleccionade(prevState=>({
      ...prevState,
      [name]: value
    }))
    console.log(reservaSeleccionade);
  }
  const [modalEditar, setModalEditar]=useState(false);
  if (reservas === undefined) {
    reservas= [];
}
const abrirCerrarModalEditar=()=>{
  setModalEditar(!modalEditar);
}

const seleccionarReserva=(reserva)=>{
  setReservaSeleccionade(reserva);
  abrirCerrarModalEditar();
}
const peticionPut=async()=>{
  await axios.put(url, reservaSeleccionade)
  .then(response=>{
    var dataNueva=data;
    dataNueva.map(reserva=>{
      if(reservaSeleccionade.IDRESERVA===reserva.IDRESERVA){
        reserva.IDRESERVA=reservaSeleccionade.IDRESERVA;
        reserva.IDSTATE=reservaSeleccionade.IDSTATE;
      }
    })
    setData(dataNueva);
    abrirCerrarModalEditar();
    console.log(response)
  })
}

const bodyEditar = (
  <Box sx={{
    position: 'absolute',
    width: '350px',
    backgroundColor: '#ffff',
    border: '2px solid #000',
    boxShadow: '1px',
    padding: '10px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 'auto',
    align: 'center'
  }} >
    <div align='center'>
    <Typography sx={{color: '#f57c00',margin:1}}><b> EDITAR ESTADO DE LA RESERVA </b></Typography>
    {/* <TextField label="Contraseña" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'PASSWORD' value={reservaSeleccionade && reservaSeleccionade.PASSWORD}> </TextField> */}
    <FormControl variant='standard'color='warning' sx={{width: 230}}>
        <InputLabel>Estado</InputLabel>
        <Select
          value={reservaSeleccionade &&reservaSeleccionade.IDSTATE}
          defaultValue={reservaSeleccionade &&reservaSeleccionade.IDSTATE}
          onChange={handleChange}
          name='IDSTATE'
        >
          <MenuItem value={1}>Pendiente</MenuItem>
          <MenuItem value={2}>Confirmada</MenuItem>
          <MenuItem value={3}>Finalizada</MenuItem>
          <MenuItem value={4}>Rechazada</MenuItem>
        </Select>
      </FormControl>
    </div>
   
    <div align='center'>
      <Button  variant="outlined" color='warning' sx={{m: 2}} onClick={()=>peticionPut()}>Aceptar</Button>
      <Button onClick={()=>abrirCerrarModalEditar()} variant="outlined" color='warning' sx={{m: 2}}>Cancelar</Button>
    </div>
  </Box>
  )

  return (
    <div style={{ width: '100%' }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No Reserva</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Personas</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Hora</TableCell>
              <TableCell>Nota</TableCell>
              <TableCell>Estado</TableCell>
              {((tipo!=3)&&(tipo!=4)) ? <TableCell>Acciones</TableCell> : null}
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
                  <TableCell>{reserva.NOTE}</TableCell>
                  <TableCell width={100}>
                    {
                      (reserva.STATE==1) ?   <Chip label='PENDIENTE' color="primary"/> :
                      (reserva.STATE==2) ?   <Chip label='CONFIRMADA' color="success"/>  : 
                      (reserva.STATE==3) ?   <Chip label='FINALIZADA' color="warning"/>  : 
                      (reserva.STATE==4) ?   <Chip label='RECHAZADA' color="error"/>  : null
 }
                   
                    </TableCell>
                    <TableCell width={100} align='center'>
                    {
                  ((tipo!=3)&&(tipo!=4)) ?
                  <EditIcon  cursor='pointer' onClick={()=>seleccionarReserva(reserva)}/> : null
                  }
                    </TableCell>
                </TableRow>
              ))
            }
          </TableBody>

        </Table>

      </TableContainer>
      <Modal
     open={modalEditar}
     onClose={abrirCerrarModalEditar}>
        {bodyEditar}
     </Modal>

    </div>
  )
}


export default DataTableReserva;
