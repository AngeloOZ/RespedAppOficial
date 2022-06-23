
import { Table, TableRow, TableCell, TableContainer,Box, TableHead, TableBody, Modal, Button, TextField, Typography} from '@mui/material';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';


 const DataTableCategorias = ({categories}) => {
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
      <Typography sx={{color: '#f57c00',margin:1}}><b> INSERTAR CATEGORÍA </b></Typography>
    <TextField label="Nombre" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'NAME'> </TextField>
   
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
      <Typography sx={{color: '#f57c00',margin:1}}><b> EDITAR CATEGORÍA </b></Typography>
    
    <TextField label="Nombre" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'NAME' value={categoriaSeleccionade && categoriaSeleccionade.NAME}> </TextField>
   
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
      <p>¿Estás seguro que deseas eliminar la categoría <b>{categoriaSeleccionade && categoriaSeleccionade.NAME}</b> ? </p>
    
   
      <Button variant="outlined" color="error" sx={{m: 2}} onClick={()=>peticionDelete()} >Sí</Button>
      <Button variant="outlined" color="warning" sx={{m: 2}} onClick={()=>abrirCerrarModalEliminar()}>No</Button>

    </div>

  </Box>
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
  
  return (
    <div style={{ height: 700, width: '100%' }}>
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
              Object.entries(categories).map(categoria => (
               
                <TableRow key={categoria[1].IDCATEGORIA}>
                  <TableCell>{categoria[1].NAME}</TableCell>
                  <TableCell width={100} align='center'>
                  <EditIcon   onClick={()=>seleccionarCategoria(categoria[1], 'Editar')}/>
                  <DeleteIcon color='error'  onClick={()=>seleccionarCategoria(categoria[1], 'Eliminar')}/>
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
