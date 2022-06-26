import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Collapse } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import DataTableUsuario from "./DataTableUsuario";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ListUsuarios = ({ users, tipo }) => {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  let nombreTipo;
  if (tipo == 1) {
    nombreTipo = "Ver Administradores";
  }
  if (tipo == 2) {
    nombreTipo = "Ver Meseros";
  }
  if (tipo == 3) {
    nombreTipo = "Ver Clientes";
  }
  return (
    <div>
      <List>
        {open == false ? (
          <ListItem
            sx={{
              backgroundColor: "#f57c00",
              color: "white",
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            {" "}
            <ListItemText primary={nombreTipo} />
            <KeyboardArrowUpIcon/>
          </ListItem>
        ) : (
          <ListItem sx={{backgroundColor: '#D6D6D6', cursor: "pointer" }} onClick={handleClick}>
            <ListItemText primary={nombreTipo} />
            <KeyboardArrowDownIcon/>
          </ListItem>
        )}

        <Collapse in={!open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <div>
              <DataTableUsuario users={users} tipo={tipo} />
            </div>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default ListUsuarios;
