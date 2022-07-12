import { Chip } from "@mui/material";

export const StateOfReservation = ({ state }) => {
  if (state == 1 || state == "PENDIENTE") {
    return <Chip label="PENDIENTE" color="primary" />;
  }
  if (state == 2 || state == "CONFIRMADA") {
    return <Chip label="CONFIRMADA" color="success" />;
  }
  if (state == 3 || state == "FINALIZADA") {
    return <Chip label="FINALIZADA" color="warning" />;
  }
  if (state == 4 || state == "RECHAZADA") {
    return <Chip label="RECHAZADA" color="error" />;
  }
  return <Chip label="ERROR" color="error" />;
};
