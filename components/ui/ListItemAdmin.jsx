import {
  AdminPanelSettings,
  CategoryOutlined,
  ConfirmationNumberOutlined,
} from "@mui/icons-material";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React from "react";

export const ListItemAdmin = ({ navigateTo }) => {
  return (
    <>
      <ListSubheader>Panel Administrador</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <CategoryOutlined />
        </ListItemIcon>
        <ListItemText primary={"Productos"} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ConfirmationNumberOutlined />
        </ListItemIcon>
        <ListItemText primary={"Ordenes"} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AdminPanelSettings />
        </ListItemIcon>
        <ListItemText primary={"Usuarios"} />
      </ListItem>
    </>
  );
};
