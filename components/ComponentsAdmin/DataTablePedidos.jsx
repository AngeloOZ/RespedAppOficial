import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { Table, TableRow, TableCell,Select, TableContainer, TableHead, TableBody, Modal, Button, Box, MenuItem, Typography,Chip,FormControl,InputLabel} from '@mui/material';
import { useState } from 'react';


 const DataTablePedidos = ({pedidos,tipo}) => {
  const [data, setData]=useState([]);
  const url = '/pedido/'
  const [pedidoSeleccionade, setPedidoSeleccionade]=useState({
    IDPEDIDOTOTAL: '',
    IDSTATE: ''
  })

  const handleChange=e=>{
    let value = e.target.value;
    let name = e.target.name;
    setPedidoSeleccionade(prevState=>({
      ...prevState,
      [name]: value
    }))
    console.log(pedidoSeleccionade);
  }
  const [modalEditar, setModalEditar]=useState(false);
  if (pedidos === undefined) {
    pedidos= [];
}
const abrirCerrarModalEditar=()=>{
  setModalEditar(!modalEditar);
}

const seleccionarPedido=(pedido)=>{
  setPedidoSeleccionade(pedido);
  abrirCerrarModalEditar();
}
const peticionPut=async()=>{
  await axios.put(url, pedidoSeleccionade)
  .then(response=>{
    var dataNueva=data;
    dataNueva.map(pedido=>{
      if(pedidoSeleccionade.IDPEDIDO===pedido.IDPEDIDO){
        pedido.IDPEDIDOTOTAL=pedidoSeleccionade.IDPEDIDOTOTAL;
        pedido.IDSTATE=pedidoSeleccionade.IDSTATE;
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
    <Typography sx={{color: '#f57c00',margin:1}}><b> EDITAR ESTADO DEL PEDIDO </b></Typography>
    {/* <TextField label="Contraseña" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'PASSWORD' value={pedidoSeleccionade && pedidoSeleccionade.PASSWORD}> </TextField> */}
    <FormControl variant='standard'color='warning' sx={{width: 230}}>
        <InputLabel>Estado</InputLabel>
        <Select
          value={pedidoSeleccionade &&pedidoSeleccionade.IDSTATE}
          defaultValue={pedidoSeleccionade &&pedidoSeleccionade.IDSTATE}
          onChange={handleChange}
          name='IDSTATE'
        >
          <MenuItem value={1}>En Proceso</MenuItem>
          <MenuItem value={2}>Confirmado</MenuItem>
          <MenuItem value={3}>Preparando</MenuItem>
          <MenuItem value={4}>Completado</MenuItem>
          <MenuItem value={5}>Finalizado</MenuItem>
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
              <TableCell>No Pedido</TableCell>
              {(tipo!=4) ? <TableCell>Productos</TableCell> : null}
              <TableCell>Valor Total</TableCell>
              <TableCell>Nota</TableCell>
              {(tipo==1) ? <TableCell>Mesa</TableCell> : (tipo==2) ? <TableCell>Direccion</TableCell> : (tipo==3) ? <TableCell>No Reserva</TableCell>: null}
              <TableCell>Estado</TableCell>
              {
                      (tipo!=4)?
                      <TableCell>Acciones</TableCell>:null
                    }
              
            </TableRow>
          </TableHead>
          <TableBody>
            {
               pedidos.map(pedido => (
                <TableRow key={pedido.IDPEDIDO}>
                  <TableCell>{pedido.NUMPEDIDO}</TableCell>
                  
                  {
                    (tipo!=4)?
                    <TableCell>{
                      pedido.PRODUCTOS.map((pedido,index) => (
                        <li key={index}>{pedido}</li>
                      ))}</TableCell>:null
                      
                  }
                    
                  <TableCell>{pedido.VALORTOTAL}</TableCell>
                  <TableCell>{pedido.NOTE}</TableCell>
                  {
                  (tipo==1) ? <TableCell>{pedido.MESA}</TableCell> : (tipo==2) ? 
                  <TableCell>{
                    <>
                    <li>{pedido.DIRECCION.STREET1}</li>
                    <li>{pedido.DIRECCION.STREET2}</li>
                    <li>{pedido.DIRECCION.REFERENCE}</li>
                    </>
                  }</TableCell> : (tipo==3) ? 
                  <TableCell>{pedido.RESERVA}</TableCell>:null
                  }
                  <TableCell width={100}>
                    {
                      (pedido.IDSTATE==1) ?   <Chip label='EN PROCESO' color="primary"/> :
                      (pedido.IDSTATE==2) ?   <Chip label='CONFIRMADO' color="success"/>  : 
                      (pedido.IDSTATE==3) ?   <Chip label='PREPARANDO' color="secondary"/>  : 
                      (pedido.IDSTATE==4) ?   <Chip label='COMPLETADO' color="warning"/>  : 
                      (pedido.IDSTATE==5) ?   <Chip label='FINALIZADO'color="error"/>  : 
                      (pedido.IDSTATE==6) ?   <Chip label='PENDIENTE' color="info"/>  : null
 }
                   
                    </TableCell>
                    {
                      (tipo!=4)?
                      <TableCell width={100} align='center'>
                    <EditIcon cursor='pointer' onClick={()=>seleccionarPedido(pedido)}/>
                    </TableCell>:null
                    }
                    
                   
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


export default DataTablePedidos;
