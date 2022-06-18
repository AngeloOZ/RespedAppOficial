
import { Table, TableRow, TableCell, TableContainer, TableHead, TableBody, Modal, Button, TextField, makeStyles} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



 const DataTableUsuario = ({users}) => {
  if (users === undefined) {
    users= [{
      USERNAME: '',
      NAME: '',
      LASTNAME: '',
      USERNAME: '',
      EMAIL: '',
      PHONE: '',
    }];
}
  return (
    <div style={{ height: 700, width: '100%' }}>
      <br/>
      <Button>Insertar</Button>
      <br/>
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
            {/* {
               users.map(user => (
                <TableRow key={user.IDUSUARIO}>
                  <TableCell>{user.USERNAME}</TableCell>
                  <TableCell>{user.NAME}</TableCell>
                  <TableCell>{user.LASTNAME}</TableCell>
                  <TableCell>{user.EMAIL}</TableCell>
                  <TableCell>{user.PHONE}</TableCell>
                </TableRow>
              ))
            } */}
            <TableRow>
                  <TableCell>emilych</TableCell>
                  <TableCell>Emily</TableCell>
                  <TableCell>Chimbo</TableCell>
                  <TableCell>emily@gmail.com</TableCell>
                  <TableCell>0960508018</TableCell>
                  <TableCell>
                    <EditIcon>

                    </EditIcon>
                    <DeleteIcon>

                    </DeleteIcon>
                  </TableCell>
                </TableRow>
          </TableBody>

        </Table>

      </TableContainer>
    </div>
  )
}


export default DataTableUsuario;
