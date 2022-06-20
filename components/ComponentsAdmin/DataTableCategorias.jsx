
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
  }
}));

 const DataTableCategorias = ({categories}) => {
  const styles= useStyles();
  const [data, setData]=useState([]);
  const url = '/categoria/'

  const [categoriaSeleccionade, setCategoriaSeleccionade]=useState({
    NAME: ''
  })
  
  const handleChange=e=>{
    let value = e.target.value;
    let name = e.target.name;
    setCategoriaSeleccionade(prevState=>({
      ...prevState,
      [name]: value
    }))
    console.log(categoriaSeleccionade);
  }
  const [modalInsertar, setModalInsertar]=useState(false);
  const [modalEditar, setModalEditar]=useState(false);
  const [modalEliminar, setModalEliminar]=useState(false);

  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }
  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }
  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }
  const seleccionarCategoria=(categoria, caso)=>{
    setCategoriaSeleccionade(categoria);
    (caso==='Editar')?abrirCerrarModalEditar():abrirCerrarModalEliminar()
  }
  
const bodyInsertar = (
  <div className={styles.modal} align='center'>
      <Typography sx={{ margin: 2 }} className={styles.tipografia}> INSERTAR CATEGORÍA </Typography>
    <TextField label="Nombre" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'NAME'> </TextField>
    <div>
      <Button  variant="outlined" color='warning' sx={{m: 2}} onClick={()=>peticionPost()}>Aceptar</Button>
      <Button onClick={()=>abrirCerrarModalInsertar()} variant="outlined" color='warning' sx={{m: 2}}>Cancelar</Button>
    </div>
  </div>
)

const bodyEditar = (
  <div className={styles.modal} align='center'>
      <Typography sx={{ margin: 2 }} className={styles.tipografia}> EDITAR CATEGORÍA </Typography>
    
    <TextField label="Nombre" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'NAME' value={categoriaSeleccionade && categoriaSeleccionade.NAME}> </TextField>
    <div>
      <Button  variant="outlined" color='warning' sx={{m: 2}} onClick={()=>peticionPut()}>Aceptar</Button>
      <Button onClick={()=>abrirCerrarModalEditar()} variant="outlined" color='warning' sx={{m: 2}}>Cancelar</Button>
    </div>
  </div>
)

const bodyEliminar=(
  <div className={styles.modal} align='center'>
      <p>¿Estás seguro que deseas eliminar el categoria <b>{categoriaSeleccionade && categoriaSeleccionade.NAME}</b> ? </p>
    
    <div>
      <Button variant="outlined" color="error" sx={{m: 2}} onClick={()=>peticionDelete()} >Sí</Button>
      <Button variant="outlined" color="warning" sx={{m: 2}} onClick={()=>abrirCerrarModalEliminar()}>No</Button>

    </div>

  </div>
)

const peticionDelete=async()=>{
  await axios.delete(url+categoriaSeleccionade.IDCATEGORIA)
  .then(response=>{
    setData(data.filter(categoria=>categoria.IDCATEGORIA!==categoriaSeleccionade.IDCATEGORIA));
    abrirCerrarModalEliminar();
  })
}

const peticionPost=async()=>{
  console.log(categoriaSeleccionade)
  await axios.post(url, categoriaSeleccionade)
  .then(response=>{
    setData(data.concat(response.data))
    abrirCerrarModalInsertar()
  })
}

const peticionPut=async()=>{
  await axios.put(url, categoriaSeleccionade)
  .then(response=>{
    var dataNueva=data;
    dataNueva.map(categoria=>{
      if(categoriaSeleccionade.IDCATEGORIA===categoria.IDCATEGORIA){
        categoria.NAME=categoriaSeleccionade.NAME;
      }
    })
    setData(dataNueva);
    abrirCerrarModalEditar();
  })
}
  if (categories === undefined) {
    categories= [];
}
  return (
    <div style={{ height: 700, width: '100%' }}>
      <br/>
      <Button onClick={abrirCerrarModalInsertar}  color="warning">Insertar</Button>
      <br/>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
               categories.map(categoria => (
                <TableRow key={categoria.IDCATEGORIA}>
                  <TableCell>{categoria.NAME}</TableCell>
                  <TableCell width={100} align='center'>
                  <EditIcon  className={styles.iconos} onClick={()=>seleccionarCategoria(categoria, 'Editar')}/>
                  <DeleteIcon color='error' className={styles.iconos} onClick={()=>seleccionarCategoria(categoria, 'Eliminar')}/>
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


export default DataTableCategorias;
