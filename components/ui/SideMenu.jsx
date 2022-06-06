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
  EscalatorWarningOutlined,
  FemaleOutlined,
  LoginOutlined,
  MaleOutlined,
  SearchOutlined,
  VpnKeyOutlined,
} from "@mui/icons-material";

export const SideMenu = ({ categories = [] }) => {
  return (
    <Drawer
      open={false}
      anchor="right"
      sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
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

          <Box sx={{ display: { xs: "", sm: "none" } }}>
            <Divider />
            <ListSubheader>Categorias</ListSubheader>
            <Divider />
            {categories.map((category) => {
              return (
                <ListItem button key={category.IDCATEGORIA}>
                  <ListItemIcon>
                    <MaleOutlined />
                  </ListItemIcon>
                  <ListItemText primary={category.NAME} />
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
