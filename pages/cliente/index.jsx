import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { ClienteLayout } from "../../components/layouts/ClienteLayout";
import { AuthContext } from "../../context";
import { jwt } from "../../helpers";
import CreateIcon from "@mui/icons-material/Create";

const ProfilePage = () => {
  const { username } = useContext(AuthContext);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <ClienteLayout>
      <Box
        component={"div"}
        display="flex"
        justifyContent="space-between"
        my={1}
      >
        <Typography variant="h1" component="h1">
          {username}
        </Typography>
        <Button
          variant="outlined"
          startIcon={<CreateIcon />}
          onClick={() => setIsEdit(true)}
        >
          Delete
        </Button>
      </Box>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nombres"
              variant="outlined"
              color="warning"
              fullWidth
              disabled={!isEdit}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Apellidos"
              variant="outlined"
              color="warning"
              fullWidth
              disabled={!isEdit}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Teléfono"
              variant="outlined"
              color="warning"
              fullWidth
              disabled={!isEdit}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Nombre de usuario"
              variant="outlined"
              color="warning"
              fullWidth
              disabled={!isEdit}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Correo electrónico"
              variant="outlined"
              color="warning"
              fullWidth
              disabled={!isEdit}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              variant="outlined"
              color="warning"
              fullWidth
              disabled={!isEdit}
            />
          </Grid>
          {isEdit && (
            <Grid xs={12} display="flex" justifyContent={"center"} py={1}>
              <Button size="large">Guardar cambios</Button>
            </Grid>
          )}
        </Grid>
      </form>
    </ClienteLayout>
  );
};

export default ProfilePage;

export const getServerSideProps = async ({ req }) => {
  const { SESSION_ID: token } = req.cookies;
  try {
    const data = await jwt.isValidToken(token);
    console.log(data);
  } catch (error) {}

  return {
    props: {},
  };
};
