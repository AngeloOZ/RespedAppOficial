import { useContext } from "react";

import NextLink from "next/link";
import { useRouter } from "next/router";

import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { ShoppingCartOutlined, MenuOutlined } from "@mui/icons-material";

import { UIContext } from "../../context/ui";

export const Navbar = ({ categories = [] }) => {
  const {asPath} = useRouter();
  const {toggleSideMenu} = useContext(UIContext)

  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">El Fogón de COZ </Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <NextLink href="#" passHref>
            <Link mr={1}>
              <Button>Todos</Button>
            </Link>
          </NextLink>
          {categories.map((category) => {
            return (
              <NextLink href="#" passHref key={category.IDCATEGORIA}>
                <Link mr={1}>
                  <Button>{category.NAME}</Button>
                </Link>
              </NextLink>
            );
          })}
        </Box>

        <Box flex={1} />

        <NextLink href="/cart" passHref>
          <Link>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>
        <IconButton style={{ marginLeft: "10px" }} onClick={toggleSideMenu}>
          <MenuOutlined fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
