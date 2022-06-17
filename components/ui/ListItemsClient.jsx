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
      <ListItem button>
        <ListItemIcon>
          <AccountCircleOutlined />
        </ListItemIcon>
        <ListItemText primary={"Perfil"} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ConfirmationNumberOutlined />
        </ListItemIcon>
        <ListItemText primary={"Mis Ordenes"} />
      </ListItem>
    </>
  );
};
