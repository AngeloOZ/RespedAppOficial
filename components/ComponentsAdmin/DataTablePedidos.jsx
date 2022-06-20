import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { Table, TableRow, TableCell,Select, TableContainer, TableHead, TableBody, Modal, Button, TextField, MenuItem, Typography,Chip,FormControl,InputLabel} from '@mui/material';
import { makeStyles } from '@mui/styles'
import { useState } from 'react';

const useStyles = makeStyles(() => ({
  modal: {
    position: 'absolute',
    width: 350,
    backgroundColor: '#ffff',
    border: '2px solid #000',
    boxShadow: 1,
    padding: 10,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  tipografia:{
    color: '#f57c00',
    fontWeight: 'bold',
    letterSpacing: '2px'
  }
}));


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
  const styles= useStyles();
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
  <div className={styles.modal} align='center'>
    <Typography sx={{ margin: 2 }} className={styles.tipografia}> EDITAR ESTADO DEL PEDIDO </Typography>
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
    <div>
      <Button  variant="outlined" color='warning' sx={{m: 2}} onClick={()=>peticionPut()}>Aceptar</Button>
      <Button onClick={()=>abrirCerrarModalEditar()} variant="outlined" color='warning' sx={{m: 2}}>Cancelar</Button>
    </div>
  </div>
)
  return (
    <div style={{ width: '100%' }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No Pedido</TableCell>
              <TableCell>Productos</TableCell>
              <TableCell>Valor Total</TableCell>
              <TableCell>Nota</TableCell>
              {(tipo==1) ? <TableCell>Mesa</TableCell> : (tipo==2) ? <TableCell>Direccion</TableCell> : <TableCell>No Reserva</TableCell>}
              <TableCell>Estado</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
               pedidos.map(pedido => (
                <TableRow key={pedido.IDPEDIDO}>
                  <TableCell>{pedido.NUMPEDIDO}</TableCell>
                  <TableCell>
                  {
                      pedido.PRODUCTOS.map((pedido,index) => (
                        <li key={index}>{pedido}</li>
                      ))
                    }
                    </TableCell>
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
                  }</TableCell> : 
                  <TableCell>{pedido.RESERVA}</TableCell>}
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
                    <TableCell width={100} align='center'>
                    <EditIcon  className={styles.iconos} onClick={()=>seleccionarPedido(pedido)}/>
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


export default DataTablePedidos;
