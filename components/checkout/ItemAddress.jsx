import { useContext } from "react";
import { CartContext } from "../../context";

import {
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import css from "./ItemAddress.module.scss";

export const ItemAddress = ({ defaultAddress }) => {
  const { updateAddressCart } = useContext(CartContext);
  return (
    <ListItem
      secondaryAction={
        <Button
          variant="outlined"
          color="primary"
          endIcon={<SendIcon />}
          onClick={() => updateAddressCart(1)}
        >
          Seleccionar
        </Button>
      }
      disablePadding
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar className={defaultAddress && css.defaultAddress}>
            {defaultAddress ? <StarIcon /> : <LocationOnIcon />}
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography variant="h3" mb={1}>
            Casa
          </Typography>
          <p className={css.textAddress}>
            <strong>Direccion: </strong>
            <span>Lorem ipsum dolor sit amet.</span>
          </p>
          <p className={css.textAddress}>
            <strong>Teléfono: </strong>
            <span>0987654321</span>
          </p>
          <p className={css.textAddress}>
            <strong>Referencia: </strong>
            <span>Lorem ipsum dolor sit amet.</span>
          </p>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
