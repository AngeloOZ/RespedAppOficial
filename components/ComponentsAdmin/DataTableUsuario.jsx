
import { Table, TableRow, TableCell, TableContainer, TableHead, TableBody, Modal, Button, TextField, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles'
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

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
  }, 
  inputMaterial:{
    width: '100%'
  }
}));


 const DataTableUsuario = ({users, tipo}) => {
  const [data, setData]=useState([]);

  const url = '/usuario/'

  const [usuarioSeleccionada, setUsuarioSeleccionada]=useState({
    IDTIPOUSUARIO: tipo,
    USERNAME: '',
    NAME:'',
    LASTNAME: '',
    EMAIL: '',
    PASSWORD: '',
    PHONE: ''
  })
  
  const handleChange=e=>{
    let value = event.target.value;
    let name = event.target.name;
    setUsuarioSeleccionada(prevState=>({
      ...prevState,
      [name]: value
    }))
    console.log(usuarioSeleccionada);
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
  const styles= useStyles();
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
  setUsuarioSeleccionada(user);
  (caso==='Editar')?abrirCerrarModalEditar():abrirCerrarModalEliminar()
}

const bodyInsertar = (
  <div className={styles.modal} align='center'>
    {
      <Typography sx={{ margin: 2 }} className={styles.tipografia}> INSERTAR {nombreTipo} </Typography>
    }
    <TextField label="Username" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'USERNAME'> </TextField>
    <TextField label="Nombre" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'NAME'> </TextField>
    <TextField label="Apellido" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'LASTNAME'> </TextField>
    <TextField label="Email" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'EMAIL'> </TextField>
    <TextField label="Teléfono" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'PHONE'> </TextField>
    <TextField label="Contraseña" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'PASSWORD'> </TextField>
    <div>
      <Button  variant="outlined" color='warning' sx={{m: 2}} onClick={()=>peticionPost()}>Aceptar</Button>
      <Button onClick={()=>abrirCerrarModalInsertar()} variant="outlined" color='warning' sx={{m: 2}}>Cancelar</Button>
    </div>
  </div>
)

const bodyEditar = (
  <div className={styles.modal} align='center'>
    {
      <Typography sx={{ margin: 2 }} className={styles.tipografia}> EDITAR {nombreTipo} </Typography>
    }
    <TextField label="Username" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'USERNAME' value={usuarioSeleccionada && usuarioSeleccionada.USERNAME}> </TextField>
    <TextField label="Nombre" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'NAME' value={usuarioSeleccionada && usuarioSeleccionada.NAME}> </TextField>
    <TextField label="Apellido" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'LASTNAME' value={usuarioSeleccionada && usuarioSeleccionada.LASTNAME}> </TextField>
    <TextField label="Email" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'EMAIL' value={usuarioSeleccionada && usuarioSeleccionada.EMAIL}> </TextField>
    <TextField label="Teléfono" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'PHONE' value={usuarioSeleccionada && usuarioSeleccionada.PHONE}> </TextField>
    <TextField label="Contraseña" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'PASSWORD' value={usuarioSeleccionada && usuarioSeleccionada.PASSWORD}> </TextField>
    <div>
      <Button  variant="outlined" color='warning' sx={{m: 2}} onClick={()=>peticionPut()}>Aceptar</Button>
      <Button onClick={()=>abrirCerrarModalEditar()} variant="outlined" color='warning' sx={{m: 2}}>Cancelar</Button>
    </div>
  </div>
)

const bodyEliminar=(
  <div className={styles.modal} align='center'>
      <p>¿Estás seguro que deseas eliminar el usuario <b>{usuarioSeleccionada && usuarioSeleccionada.USERNAME}</b> ? </p>
    
    <div>
      <Button variant="outlined" color="error" sx={{m: 2}} onClick={()=>peticionDelete()} >Sí</Button>
      <Button variant="outlined" color="warning" sx={{m: 2}} onClick={()=>abrirCerrarModalEliminar()}>No</Button>

    </div>

  </div>
)

const peticionDelete=async()=>{
  await axios.delete(url+usuarioSeleccionada.IDUSUARIO)
  .then(response=>{
    setData(data.filter(usuario=>usuario.IDUSUARIO!==usuarioSeleccionada.IDUSUARIO));
    abrirCerrarModalEliminar();
  })
}

const peticionPost=async()=>{
  console.log(usuarioSeleccionada)
  await axios.post(url, usuarioSeleccionada)
  .then(response=>{
    setData(data.concat(response.data))
    abrirCerrarModalInsertar()
  })
}

const peticionPut=async()=>{
  await axios.put(url, usuarioSeleccionada)
  .then(response=>{
    var dataNueva=data;
    dataNueva.map(usuario=>{
      if(usuarioSeleccionada.IDUSUARIO===usuario.IDUSUARIO){
        usuario.USERNAME=usuarioSeleccionada.USERNAME;
        usuario.NAME=usuarioSeleccionada.NAME;
        usuario.LASTNAME=usuarioSeleccionada.LASTNAME;
        usuario.EMAIL=usuarioSeleccionada.EMAIL;
        usuario.PHONE=usuarioSeleccionada.PHONE;
        usuario.PASSWORD=usuarioSeleccionada.PASSWORD;
      }
    })
    setData(dataNueva);
    abrirCerrarModalEditar();
  })
}
  return (
    <div style={{ height: 700, width: '100%' }}>
     
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
                  <TableCell width={100}>
                  {
                  (tipo!=3) ?
                  <EditIcon  className={styles.iconos} onClick={()=>seleccionarusuario(user, 'Editar')}/> : null
                  }
                    
                  <DeleteIcon color='error' className={styles.iconos} onClick={()=>seleccionarusuario(user, 'Eliminar')}>
                  </DeleteIcon>
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
