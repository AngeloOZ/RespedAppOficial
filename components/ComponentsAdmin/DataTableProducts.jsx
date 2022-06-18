
import { Table, TableRow, TableCell, TableContainer, TableHead, TableBody, Modal, Button, TextField, makeStyles} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { CardMedia } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import { Acciones } from './Acciones';

 const DataTableProducts = ({products}) => {
  if (products === undefined) {
    products= [];
}
  return (
    <div style={{ height: 700, width: '100%' }}>
      <br/>
      <Button color="warning">Insertar</Button>
      <br/>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Categoria</TableCell>
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
                <TableRow key={producto.IDCATEGORIA}>
                  <TableCell>{producto.IDCATEGORIA}</TableCell>
                  <TableCell>{producto.NAME}</TableCell>
                  <TableCell>{producto.DETAIL}</TableCell>
                  <TableCell>{producto.PRICE}</TableCell>
                  <TableCell>
                    <CardMedia component="img" image={producto.IMAGE} height="80"/>
                    </TableCell>
                    <TableCell align='center'>
                    {(producto.AVAILABILITY==1) ? <CheckIcon/> : <DoNotDisturbIcon/>}
                    </TableCell>
                    <Acciones/>
                </TableRow>
              ))
            }
          </TableBody>

        </Table>

      </TableContainer>
    </div>
  )
}


export default DataTableProducts;
