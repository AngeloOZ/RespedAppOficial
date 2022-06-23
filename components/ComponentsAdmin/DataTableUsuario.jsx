
import { Table, TableRow, TableCell, TableContainer, TableHead, TableBody, Modal, Button, TextField, Typography,Box} from '@mui/material';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';


 const DataTableUsuario = ({users, tipo}) => {
  const [data, setData]=useState([]);

  const url = '/usuario/'

  const [usuarioSeleccionade, setUsuarioSeleccionade]=useState({
    IDTIPOUSUARIO: tipo,
    USERNAME: '',
    NAME:'',
    LASTNAME: '',
    EMAIL: '',
    PASSWORD: '',
    PHONE: ''
  })
  
  const handleChange=e=>{
    let value = e.target.value;
    let name = e.target.name;
    setUsuarioSeleccionade(prevState=>({
      ...prevState,
      [name]: value
    }))
    console.log(usuarioSeleccionade);
  }
  
  let nombreTipo;
  if(tipo==1){
    nombreTipo='ADMINISTRADOR'
  }
  if(tipo==2){
    nombreTipo='MESERO'
  }
  if(tipo==3){
    nombreTipo='CLIENTE'
  }
  const [modalInsertar, setModalInsertar]=useState(false);
  const [modalEditar, setModalEditar]=useState(false);
  const [modalEliminar, setModalEliminar]=useState(false);

  if (users === undefined) {
    users= [];
}
const abrirCerrarModalInsertar=()=>{
  setModalInsertar(!modalInsertar);
}
const abrirCerrarModalEditar=()=>{
  setModalEditar(!modalEditar);
}
const abrirCerrarModalEliminar=()=>{
  setModalEliminar(!modalEliminar);
}

const seleccionarusuario=(user, caso)=>{
  setUsuarioSeleccionade(user);
  (caso==='Editar')?abrirCerrarModalEditar():abrirCerrarModalEliminar()
}

const bodyInsertar = (
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
    {
      <Typography sx={{color: '#f57c00',margin:1}}><b> INSERTAR {nombreTipo}  </b></Typography>
    }
    </div>
    
    <TextField required label="Username" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'USERNAME'> </TextField>
    <TextField  label="Nombre" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'NAME'> </TextField>
    <TextField  label="Apellido" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'LASTNAME'> </TextField>
    <TextField required label="Email" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'EMAIL'> </TextField>
    <TextField required label="Teléfono" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'PHONE'> </TextField>
    <TextField required label="Contraseña" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'PASSWORD'> </TextField>
    <div align='center'>
      <Button  variant="outlined" color='warning' sx={{m: 2}} onClick={()=>peticionPost()}>Aceptar</Button>
      <Button onClick={()=>abrirCerrarModalInsertar()} variant="outlined" color='warning' sx={{m: 2}}>Cancelar</Button>
    </div>
  </Box>
)

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
    {
      <Typography sx={{color: '#f57c00',margin:1}}><b> EDITAR {nombreTipo}   </b></Typography>
    }
    </div>
    
    <TextField label="Username" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'USERNAME' value={usuarioSeleccionade && usuarioSeleccionade.USERNAME}> </TextField>
    <TextField label="Nombre" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'NAME' value={usuarioSeleccionade && usuarioSeleccionade.NAME}> </TextField>
    <TextField label="Apellido" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'LASTNAME' value={usuarioSeleccionade && usuarioSeleccionade.LASTNAME}> </TextField>
    <TextField label="Email" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'EMAIL' value={usuarioSeleccionade && usuarioSeleccionade.EMAIL}> </TextField>
    <TextField label="Teléfono" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'PHONE' value={usuarioSeleccionade && usuarioSeleccionade.PHONE}> </TextField>
    <TextField label="Contraseña" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'PASSWORD' value={usuarioSeleccionade && usuarioSeleccionade.PASSWORD}> </TextField>
    <div align='center'>
      <Button  variant="outlined" color='warning' sx={{m: 2}} onClick={()=>peticionPut()}>Aceptar</Button>
      <Button onClick={()=>abrirCerrarModalEditar()} variant="outlined" color='warning' sx={{m: 2}}>Cancelar</Button>
    </div>
  </Box>
)

const bodyEliminar=(
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
    <p>¿Estás seguro que deseas eliminar el usuario <b>{usuarioSeleccionade && usuarioSeleccionade.USERNAME}</b> ? </p>
    </div>
      
    
    <div align='center'>
      <Button variant="outlined" color="error" sx={{m: 2}} onClick={()=>peticionDelete()} >Sí</Button>
      <Button variant="outlined" color="warning" sx={{m: 2}} onClick={()=>abrirCerrarModalEliminar()}>No</Button>

    </div>

  </Box>
)

const peticionDelete=async()=>{
  await axios.delete(url+usuarioSeleccionade.IDUSUARIO)
  .then(response=>{
    setData(data.filter(usuario=>usuario.IDUSUARIO!==usuarioSeleccionade.IDUSUARIO));
    abrirCerrarModalEliminar();
  })
}

const peticionPost=async()=>{
  console.log(usuarioSeleccionade)
  await axios.post(url, usuarioSeleccionade)
  .then(response=>{
    setData(data.concat(response.data))
    abrirCerrarModalInsertar()
  })
}

const peticionPut=async()=>{
  await axios.put(url, usuarioSeleccionade)
  .then(response=>{
    var dataNueva=data;
    dataNueva.map(usuario=>{
      if(usuarioSeleccionade.IDUSUARIO===usuario.IDUSUARIO){
        usuario.USERNAME=usuarioSeleccionade.USERNAME;
        usuario.NAME=usuarioSeleccionade.NAME;
        usuario.LASTNAME=usuarioSeleccionade.LASTNAME;
        usuario.EMAIL=usuarioSeleccionade.EMAIL;
        usuario.PHONE=usuarioSeleccionade.PHONE;
        usuario.PASSWORD=usuarioSeleccionade.PASSWORD;
      }
    })
    setData(dataNueva);
    abrirCerrarModalEditar();
  })
}
  return (
    <div style={{width: '100%' }}>
     
      {
        
         (tipo!=3) ? <div><Button onClick={abrirCerrarModalInsertar} color="warning">Insertar</Button> <br/></div>: null
         
      }
     
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
               users.map(user => (
                <TableRow key={user.IDUSUARIO}>
                  <TableCell>{user.USERNAME}</TableCell>
                  <TableCell>{user.NAME}</TableCell>
                  <TableCell>{user.LASTNAME}</TableCell>
                  <TableCell>{user.EMAIL}</TableCell>
                  <TableCell>{user.PHONE}</TableCell>
                  <TableCell width={100} align='center'>
                  {
                  (tipo!=3) ?
                  <EditIcon  cursor='pointer' onClick={()=>seleccionarusuario(user, 'Editar')}/> : null
                  }
                    
                  <DeleteIcon color='error' cursor='pointer' onClick={()=>seleccionarusuario(user, 'Eliminar')}/>
                 </TableCell>
                </TableRow>
              ))
            }
          </TableBody>

        </Table>

      </TableContainer>

      <Modal
      open = {modalInsertar}
      onClose = {abrirCerrarModalInsertar}>
        {bodyInsertar}
      </Modal>

      <Modal
     open={modalEditar}
     onClose={abrirCerrarModalEditar}>
        {bodyEditar}
     </Modal>

     <Modal
     open={modalEliminar}
     onClose={abrirCerrarModalEliminar}>
        {bodyEliminar}
     </Modal>
    </div>
  )
}


export default DataTableUsuario;
