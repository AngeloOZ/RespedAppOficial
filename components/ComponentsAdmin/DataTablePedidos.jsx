
import { Table, TableRow, TableCell, TableContainer, TableHead, TableBody, Modal, Button, TextField, makeStyles, ListItem} from '@mui/material';
import { Acciones } from './Acciones';
import { Chip } from '@mui/material';


 const DataTablePedidos = ({pedidos,tipo}) => {
  let color;
  if (pedidos === undefined) {
    pedidos= [];
}
  return (
    <div style={{ height: 700, width: '100%' }}>
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
                  {(tipo==1) ? <TableCell>{pedido.MESA}</TableCell> : (tipo==2) ? <TableCell>{pedido.DIRECCION}</TableCell> : <TableCell>{pedido.RESERVA}</TableCell>}
                  <TableCell width={100}>
                    {
                      (pedido.ESTADO=='EN PROCESO') ?   <Chip label={pedido.ESTADO } color="primary"/> :
                      (pedido.ESTADO=='CONFIRMADO') ?   <Chip label={pedido.ESTADO } color="success"/>  : 
                      (pedido.ESTADO=='PREPARANDO') ?   <Chip label={pedido.ESTADO } color="secondary"/>  : 
                      (pedido.ESTADO=='COMPLETADO') ?   <Chip label={pedido.ESTADO } color="warning"/>  : 
                      (pedido.ESTADO=='FINALIZADO') ?   <Chip label={pedido.ESTADO } color="error"/>  : 
                      (pedido.ESTADO=='PENDIENTE') ?   <Chip label={pedido.ESTADO } color="info"/>  : null
 }
                   
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


export default DataTablePedidos;
