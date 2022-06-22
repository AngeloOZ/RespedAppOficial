import { useContext, useState } from "react";

import NextLink from "next/link";
import { UIContext, CartContext } from "../../context";

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
import { FullScreenloader } from "../Components";

export const Navbar = ({ categories }) => {
  const [displayLoader, setDisplayLoader] = useState(false);
  const { toggleSideMenu } = useContext(UIContext);
  const { numberOfItems } = useContext(CartContext);
  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">El Fogón de COZ </Typography>
          </Link>
        </NextLink>
        <FullScreenloader display={displayLoader} />

        <Box flex={1} />

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <NextLink href="/menu" passHref>
            <Link mr={1}>
              <Button>Todos</Button>
            </Link>
          </NextLink>
          {categories.map((category) => {
            const url = `/menu/${
              category.IDCATEGORIA
            }?name=${category.NAME.toLowerCase()}`;
            return (
              <NextLink href={url} passHref key={category.IDCATEGORIA}>
                <Link mr={1}>
                  <Button
                    style={{ textTransform: "capitalize" }}
                  >
                    {category.NAME.toLowerCase()}
                  </Button>
                </Link>
              </NextLink>
            );
          })}
        </Box>

        <Box flex={1} />

        <NextLink href="/cart" passHref>
          <Link>
            <IconButton onClick={() => setDisplayLoader(true)}>
              <Badge badgeContent={numberOfItems} color="secondary">
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
