import { ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import {
   CategoryOutlined,
 } from "@mui/icons-material";
 import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
 import MenuBookIcon from '@mui/icons-material/MenuBook';

export const ListItemsMesero = ({navigateTo}) => {

  return (
    <>
      <ListSubheader>Panel Mesero</ListSubheader>
      <ListItem button onClick={() => navigateTo('/admin/ordenes-activas')}>
        <ListItemIcon>
          <CategoryOutlined />
        </ListItemIcon>
        <ListItemText primary={"Ordenes activas"} />
      </ListItem>
      <ListItem button onClick={() => navigateTo('/admin/reservas-hoy')}>
        <ListItemIcon>
          <CalendarMonthIcon />
        </ListItemIcon>
        <ListItemText primary={"Reservas del día"} />
      </ListItem>
      <ListItem button onClick={() => navigateTo('/admin/pedidos')}>
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary={"Ordenes"} />
      </ListItem>
    </>
  );
};
