
import { Table, TableRow, TableCell, TableContainer, TableHead, TableBody, Modal, Button, InputLabel,TextField, Typography,CardMedia,FormControl,MenuItem,Select} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { makeStyles } from '@mui/styles'
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
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

 const DataTableProducts = ({products,categories}) => {
  const styles= useStyles();
  const [data, setData]=useState([]);
  const url = '/producto/'

  const [productoSeleccionade, setProductoSeleccionade]=useState({
    IDCATEGORIA:'',
    NAME:'',
    DETAIL: '',
    PRICE: '',
    IMAGE: '',
    AVAILABILITY: ''
  })
  
  const handleChange=e=>{
    let value = e.target.value;
    let name = e.target.name;
    setProductoSeleccionade(prevState=>({
      ...prevState,
      [name]: value
    }))
    console.log(productoSeleccionade);
  }

  const handleChange2=e=>{
    let checked = e.target.checked;
    let name = e.target.name;
    setProductoSeleccionade(prevState=>({
      ...prevState,
      [name]: (checked==true)?1:0
    }))
    console.log(productoSeleccionade);
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
  const seleccionarProducto=(producto, caso)=>{
    setProductoSeleccionade(producto);
    (caso==='Editar')?abrirCerrarModalEditar():abrirCerrarModalEliminar()
  }
  
const bodyInsertar = (
  <div className={styles.modal} align='center'>
      <Typography sx={{ margin: 2 }} className={styles.tipografia}> INSERTAR PRODUCTO </Typography>
      <FormControl variant='standard'color='warning' sx={{width: 300}}>
        <InputLabel>Categoría</InputLabel>
        <Select
          onChange={handleChange}
          name='IDCATEGORIA'
        >
          {
            categories.map(categoria =>(
              <MenuItem value={categoria.IDCATEGORIA}>{categoria.NAME}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
       <TextField required label="Nombre" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'NAME'> </TextField>
    <TextField label="Detalle" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'DETAIL'> </TextField>
    <TextField required label="Precio" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'PRICE'> </TextField>
    <TextField helperText="Url de la imagen" label="Imagen" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'IMAGE'> </TextField>
    <div>
    <FormControlLabel control={<Switch color='warning'
    defaultChecked='true'
     onChange={handleChange2} name = 'AVAILABILITY' />} label="Disponible" />
  </div>
    <div>
      <Button  variant="outlined" color='warning' sx={{m: 2}} onClick={()=>peticionPost()}>Aceptar</Button>
      <Button onClick={()=>abrirCerrarModalInsertar()} variant="outlined" color='warning' sx={{m: 2}}>Cancelar</Button>
    </div>
  </div>
)

const bodyEditar = (
  <div className={styles.modal} align='center'>
      <Typography sx={{ margin: 2 }} className={styles.tipografia}> EDITAR PRODUCTO </Typography>
      <FormControl variant='standard'color='warning' sx={{width: 300}}>
        <InputLabel>Categoría</InputLabel>
        <Select
          value={productoSeleccionade &&productoSeleccionade.IDCATEGORIA}
          defaultValue={productoSeleccionade &&productoSeleccionade.IDCATEGORIA}
          onChange={handleChange}
          name='IDCATEGORIA'
        >
          {
            categories.map(categoria =>(
              <MenuItem value={categoria.IDCATEGORIA}>{categoria.NAME}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    <TextField label="Nombre" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'NAME' value={productoSeleccionade && productoSeleccionade.NAME}> </TextField>
    <TextField label="Detalle" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'DETAIL' value={productoSeleccionade && productoSeleccionade.DETAIL}> </TextField>
    <TextField label="Precio"type="number" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'PRICE' value={productoSeleccionade && productoSeleccionade.PRICE}> </TextField>
    <TextField helperText="Url de la imagen" label="Imagen" sx={{ width: 300,margin: 2 }} color='warning' onChange={handleChange} name = 'IMAGE' value={productoSeleccionade && productoSeleccionade.IMAGE}> </TextField>
    <div>
    <FormControlLabel control={<Switch color='warning'
    defaultChecked={productoSeleccionade.AVAILABILITY}
     onChange={handleChange2} name = 'AVAILABILITY' />} label="Disponible" />
  </div>
    
    
    <div>
      <Button  variant="outlined" color='warning' sx={{m: 2}} onClick={()=>peticionPut()}>Aceptar</Button>
      <Button onClick={()=>abrirCerrarModalEditar()} variant="outlined" color='warning' sx={{m: 2}}>Cancelar</Button>
    </div>
  </div>
)

const bodyEliminar=(
  <div className={styles.modal} align='center'>
      <p>¿Estás seguro que deseas eliminar el producto <b>{productoSeleccionade && productoSeleccionade.NAME}</b> ? </p>
    
    <div>
      <Button variant="outlined" color="error" sx={{m: 2}} onClick={()=>peticionDelete()} >Sí</Button>
      <Button variant="outlined" color="warning" sx={{m: 2}} onClick={()=>abrirCerrarModalEliminar()}>No</Button>

    </div>

  </div>
)

const peticionDelete=async()=>{
  await axios.delete(url+productoSeleccionade.IDPRODUCTO)
  .then(response=>{
    setData(data.filter(producto=>producto.IDPRODUCTO!==productoSeleccionade.IDPRODUCTO));
    abrirCerrarModalEliminar();
  })
}

const peticionPost=async()=>{
  console.log(productoSeleccionade)
  await axios.post(url, productoSeleccionade)
  .then(response=>{
    setData(data.concat(response.data))
    abrirCerrarModalInsertar()
  })
}

const peticionPut=async()=>{
  await axios.put(url, productoSeleccionade)
  .then(response=>{
    var dataNueva=data;
    dataNueva.map(producto=>{
      if(productoSeleccionade.IDPRODUCTO===producto.IDPRODUCTO){
        producto.NAME=productoSeleccionade.NAME;
      }
    })
    setData(dataNueva);
    abrirCerrarModalEditar();
  })
}

  if (products === undefined) {
    products= [];
}
if (categories === undefined) {
  categories= [];
}
  return (
    <div style={{ height: 700, width: '100%' }}>
      <br/>
      <Button onClick={abrirCerrarModalInsertar} color="warning">Insertar</Button>
      <br/>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Detalle</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Imagen</TableCell>
              <TableCell>Disponible</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
               products.map(producto => (
                <TableRow key={producto.IDPRODUCTO}>
                  <TableCell>{producto.NAME}</TableCell>
                  <TableCell>{producto.DETAIL}</TableCell>
                  <TableCell>{producto.PRICE}</TableCell>
                  <TableCell>
                    <CardMedia component="img" image={producto.IMAGE} height="80"/>
                    </TableCell>
                    <TableCell align='center'>
                    {(producto.AVAILABILITY==1) ? <CheckIcon/> : <DoNotDisturbIcon/>}
                    </TableCell>
                    <TableCell width={100} align='center'>
                  <EditIcon  className={styles.iconos} onClick={()=>seleccionarProducto(producto, 'Editar')}/>
                  <DeleteIcon color='error' className={styles.iconos} onClick={()=>seleccionarProducto(producto, 'Eliminar')}/>
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


export default DataTableProducts;
