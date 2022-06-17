import { useContext } from "react";

import { useRouter } from "next/router";
import { UIContext, AuthContext } from "../../context";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { LoginOutlined, RestaurantOutlined } from "@mui/icons-material";

import { ListItemAdmin, ListItemsClient, ListItemsAuth } from "./";

export const SideMenu = ({ categories = [] }) => {
  const router = useRouter();
  const { isMenuOpen, toggleSideMenu } = useContext(UIContext);
  const { isLoggedIn, logoutUser, rol } = useContext(AuthContext);

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
      <Box sx={{ width: 250 }}>
        <List>
          {isLoggedIn && rol == 1 && <ListItemAdmin navigateTo={navigateTo} />}
          {isLoggedIn && rol == 3 && (
            <ListItemsClient navigateTo={navigateTo} />
          )}
          {isLoggedIn && (
            <ListItem button onClick={logoutUser}>
              <ListItemIcon>
                <LoginOutlined />
              </ListItemIcon>
              <ListItemText primary={"Salir"} />
            </ListItem>
          )}
          {!isLoggedIn && <ListItemsAuth navigateTo={navigateTo} />}

          <Box sx={{ display: { sm: "block", md: "none" } }}>
            <ListSubheader>Categorias</ListSubheader>
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
        </List>
      </Box>
    </Drawer>
  );
};
