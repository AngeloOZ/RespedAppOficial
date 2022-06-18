import { useRouter } from "next/router";

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

export const ItemAddress = ({ address }) => {
  const router = useRouter();
  const defaulDir = address.DEFAULTDIR;
  const handleClickSender = (IDDIRECCION, IDRELACIONUD) => {
    const address = {
      idAdress: IDDIRECCION,
      idRelacion: IDRELACIONUD,
    };
    const dir = btoa(JSON.stringify(address));
    router.push(`/checkout/summary?dir=${dir}`);
  };
  return (
    <ListItem
      secondaryAction={
        <Button
          variant="outlined"
          color="primary"
          endIcon={<SendIcon />}
          onClick={() =>
            handleClickSender(address.IDDIRECCION, address.IDRELACIONUD)
          }
        >
          Seleccionar
        </Button>
      }
      disablePadding
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar className={defaulDir ? css.defaultAddress : ""}>
            {defaulDir ? <StarIcon /> : <LocationOnIcon />}
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography variant="h3" mb={1}>
            {address.NAME}
          </Typography>
          <p className={css.textAddress}>
            <strong>Direccion: </strong>
            <span>{`${address.STREET1},${address.STREET2}`}</span>
          </p>
          <p className={css.textAddress}>
            <strong>Teléfono: </strong>
            <span>{address.PHONEDIR}</span>
          </p>
          <p className={css.textAddress}>
            <strong>Referencia: </strong>
            <span>{address.REFERENCE}</span>
          </p>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
