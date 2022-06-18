
import { Table, TableRow, TableCell, TableContainer, TableHead, TableBody, Modal, Button, TextField, makeStyles} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Acciones } from './Acciones';


 const DataTableCategorias = ({categories}) => {
  if (categories === undefined) {
    categories= [];
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
              <TableCell>Nombre</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
               categories.map(categoria => (
                <TableRow key={categoria.IDCATEGORIA}>
                  <TableCell>{categoria.NAME}</TableCell>
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


export default DataTableCategorias;
