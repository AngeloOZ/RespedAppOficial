import { useState } from "react";
import { useRouter } from "next/router";

import {
  Avatar,
  Box,
  Button,
  Grid,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {FullScreenloader} from "../Components/index"
import css from "./ItemAddress.module.scss";


export const ItemAddress = ({ address }) => {
  const [displayLoader, setDisplayLoader] = useState(false);
  const router = useRouter();
  const defaulDir = address.DEFAULTDIR;

  const handleClickSender = (IDDIRECCION, IDRELACIONUD) => {
    setDisplayLoader(true);
    const address2 = {
      idAdress: IDDIRECCION,
      idRelacion: IDRELACIONUD,
    };
    const dir = btoa(JSON.stringify(address2));
    router.push(`/checkout/summary/domicilio?dir=${dir}`);
  };
  return (
    <>
      <FullScreenloader display={displayLoader} />
      <ListItemButton>
        <ListItemAvatar>
          <Avatar className={defaulDir ? css.defaultAddress : ""}>
            {defaulDir ? <StarIcon /> : <LocationOnIcon />}
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Grid container p={0} width={"100%"}>
            <Grid item xs={12} md={6} lg={9}>
              <AddressInformation address={address} />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <ButtonSendAddress
                handleOnClick={() =>
                  handleClickSender(address.IDDIRECCION, address.IDRELACIONUD)
                }
              />
            </Grid>
          </Grid>
        </ListItemText>
      </ListItemButton>
    </>
  );
};

const ButtonSendAddress = ({ handleOnClick }) => {
  return (
    <Box
      component="div"
      height={"100%"}
      mt={1}
      display="flex"
      alignItems={"center"}
      justifyContent="flex-end"
    >
      <Button
        variant="outlined"
        color="primary"
        endIcon={<SendIcon />}
        onClick={handleOnClick}
        fullWidth
        style={{ alignSelf: "center" }}
      >
        Seleccionar
      </Button>
    </Box>
  );
};
const AddressInformation = ({ address }) => {
  return (
    <>
      <Typography variant="h3" mb={1}>
        {address.NAME}
      </Typography>
      <Typography variant="subtitle2" component="p">
        Direccion:
        <Typography variant="subtitle3" ml={1} component="span">
          {`${address.STREET1}, ${address.STREET2}`}
        </Typography>
      </Typography>
      <Typography variant="subtitle2" component="p">
        Teléfono:
        <Typography variant="subtitle3" ml={1} component="span">
          {address.PHONEDIR}
        </Typography>
      </Typography>
      <Typography variant="subtitle2" component="p">
        Referencia:
        <Typography variant="subtitle3" ml={1} component="span">
          {address.REFERENCE}
        </Typography>
      </Typography>
    </>
  );
};
