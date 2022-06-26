import {
  Table,
  TableRow,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  Chip,
} from "@mui/material";

export const DataTableOders = ({ pedidos, tipo }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No Pedido</TableCell>
            {tipo != 4 ? <TableCell>Productos</TableCell> : null}
            <TableCell>Valor Total</TableCell>
            <TableCell>Nota</TableCell>
            {tipo == 1 ? (
              <TableCell>Mesa</TableCell>
            ) : tipo == 2 ? (
              <TableCell>Direccion</TableCell>
            ) : tipo == 3 ? (
              <TableCell>No Reserva</TableCell>
            ) : null}
            <TableCell>Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pedidos.map((pedido) => (
            <TableRowContent
              key={pedido.IDPEDIDO}
              pedido={pedido}
              tipo={tipo}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const TableRowContent = ({ pedido, tipo }) => {
  return (
    <TableRow>
      <TableCell>{pedido.NUMPEDIDO}</TableCell>
      <TableCell>
        {pedido.PRODUCTOS.map((pedido, index) => (
          <li key={index}>{pedido}</li>
        ))}
      </TableCell>
      <TableCell>{pedido.VALORTOTAL}</TableCell>
      <TableCell>{pedido.NOTE}</TableCell>
      {tipo == 1 ? (
        <TableCell>{pedido.MESA}</TableCell>
      ) : tipo == 2 ? (
        <TableCell>{pedido.DIRECCION}</TableCell>
      ) : tipo == 3 ? (
        <TableCell>{pedido.RESERVA}</TableCell>
      ) : null}
      <TableCell width={100}>
        {pedido.ESTADO == "EN PROCESO" ? (
          <Chip label="EN PROCESO" color="primary" />
        ) : pedido.ESTADO == "CONFIRMADO" ? (
          <Chip label="CONFIRMADO" color="success" />
        ) : pedido.ESTADO == "PREPARANDO" ? (
          <Chip label="PREPARANDO" color="secondary" />
        ) : pedido.ESTADO == "COMPLETADO" ? (
          <Chip label="COMPLETADO" color="warning" />
        ) : pedido.ESTADO == "FINALIZADO" ? (
          <Chip label="FINALIZADO" color="error" />
        ) : pedido.ESTADO == "PENDIENTE" ? (
          <Chip label="PENDIENTE" color="info" />
        ) : null}
      </TableCell>
    </TableRow>
  );
};
