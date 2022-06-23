import {
  AccountCircleOutlined,
  ConfirmationNumberOutlined,
} from "@mui/icons-material";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";

export const ListItemsClient = ({ navigateTo }) => {
  return (
    <>
      <ListSubheader>Panel Cliente</ListSubheader>
      <ListItem button onClick={() => navigateTo('/cliente')}>
        <ListItemIcon>
          <AccountCircleOutlined />
        </ListItemIcon>
        <ListItemText primary={"Perfil"} />
      </ListItem>
      <ListItem button onClick={() => navigateTo('/cliente/ordenes')}>
        <ListItemIcon>
          <ConfirmationNumberOutlined />
        </ListItemIcon>
        <ListItemText primary={"Mis Ordenes"} />
      </ListItem>
    </>
  );
};
