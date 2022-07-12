import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import {
  CategoryOutlined,
} from "@mui/icons-material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';

export const ListItemAdmin = ({ navigateTo }) => {
  return (
    <>
      <ListSubheader>Panel Administrador</ListSubheader>
      <ListItem button onClick={() => navigateTo("/admin/dashboard")}>
        <ListItemIcon>
          <DashboardOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={"Dashboard"} />
      </ListItem>
      <ListItem button onClick={() => navigateTo("/admin/ordenes-activas")}>
        <ListItemIcon>
          <LocalActivityOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={"Ordenes activas"} />
      </ListItem>
      <ListItem button onClick={() => navigateTo("/admin/reservas-hoy")}>
        <ListItemIcon>
          <CalendarMonthIcon />
        </ListItemIcon>
        <ListItemText primary={"Reservas del día"} />
      </ListItem>
      <ListItem button onClick={() => navigateTo('/admin/productos')}>
        <ListItemIcon>
          <CategoryOutlined />
        </ListItemIcon>
        <ListItemText primary={"Productos"} />
      </ListItem>
      <ListItem button onClick={() => navigateTo("/admin/usuarios")}>
        <ListItemIcon>
          <GroupOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={"Usuarios"} />
      </ListItem>
    </>
  );
};
