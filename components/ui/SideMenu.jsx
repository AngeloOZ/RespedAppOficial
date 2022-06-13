import { useContext } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import {
  AccountCircleOutlined,
  AdminPanelSettings,
  CategoryOutlined,
  ConfirmationNumberOutlined,
  LoginOutlined,
  RestaurantOutlined,
  VpnKeyOutlined,
} from "@mui/icons-material";

import { UIContext } from "../../context/ui";

export const SideMenu = ({ categories = [] }) => {
  const router = useRouter();
  const { isMenuOpen, toggleSideMenu } = useContext(UIContext);

  const navigateTo = (url) => {
    toggleSideMenu();
    router.push(url);
  };

  return (
    <Drawer
      open={isMenuOpen}
      anchor="right"
      sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
      onClose={toggleSideMenu}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
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
          <ListItem button>
            <ListItemIcon>
              <VpnKeyOutlined />
            </ListItemIcon>
            <ListItemText primary={"Ingresar"} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <LoginOutlined />
            </ListItemIcon>
            <ListItemText primary={"Salir"} />
          </ListItem>

          <Box sx={{ display: { sm: "block", md: "none" } }}>
            <Divider />
            <ListSubheader>Categorias</ListSubheader>
            <Divider />

            <ListItem button onClick={() => navigateTo("/menu")}>
              <ListItemIcon>
                <RestaurantOutlined />
              </ListItemIcon>
              <ListItemText primary="Todos" />
            </ListItem>
            {categories.map((category) => {
              const url = `/menu/${
                category.IDCATEGORIA
              }?name=${category.NAME.toLowerCase()}`;
              return (
                <ListItem
                  button
                  key={category.IDCATEGORIA}
                  onClick={() => navigateTo(url)}
                >
                  <ListItemIcon>
                    <RestaurantOutlined />
                  </ListItemIcon>
                  <ListItemText
                    style={{ textTransform: "capitalize" }}
                    primary={category.NAME.toLowerCase()}
                  />
                </ListItem>
              );
            })}
          </Box>

          <Divider />
          <ListSubheader>Admin Panel</ListSubheader>
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
        </List>
      </Box>
    </Drawer>
  );
};
