import { useRouter } from "next/router";
import { Login, VpnKeyOutlined } from "@mui/icons-material";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";

export const ListItemsAuth = ({ navigateTo }) => {
  const router = useRouter();
  return (
    <>
      <ListSubheader>Autenticación</ListSubheader>
      <ListItem
        button
        onClick={() => navigateTo(`/auth/login?p=${router.asPath}`)}
      >
        <ListItemIcon>
          <Login />
        </ListItemIcon>
        <ListItemText primary={"Iniciar Sesión"} />
      </ListItem>
      <ListItem
        button
        onClick={() => navigateTo(`/auth/register?p=${router.asPath}`)}
      >
        <ListItemIcon>
          <VpnKeyOutlined />
        </ListItemIcon>
        <ListItemText primary={"Registrarse"} />
      </ListItem>
    </>
  );
};
