import { useContext, useState } from "react";

import { useRouter } from "next/router";
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
import logoNav from "../../public/Img/logo_navbar.png";
import Image from "next/image";

export const Navbar = ({ categories }) => {
  const router = useRouter();
  const [displayLoader, setDisplayLoader] = useState(false);
  const { toggleSideMenu } = useContext(UIContext);
  const { numberOfItems } = useContext(CartContext);

  const handleShowLoader = (url) => {
    if (router.asPath != url) {
      setDisplayLoader(true);
      setTimeout(() => {
        setDisplayLoader(false);
      }, 6000);
    }
  };

  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Box component={"div"} mr={1}>
              <Image
                src={logoNav}
                alt="Logo de El fogon de coz"
                width={40}
                height={35}
              />
            </Box>
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
            const url = `/menu/${category.NAME.toLowerCase()}`;
            return (
              <NextLink href={url} passHref key={category.IDCATEGORIA}>
                <Link mr={1}>
                  <Button style={{ textTransform: "capitalize" }}>
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
            <IconButton onClick={() => handleShowLoader("/cart")}>
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
