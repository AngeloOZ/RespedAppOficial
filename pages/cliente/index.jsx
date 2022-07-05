import { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";

import { ClienteLayout } from "../../components/layouts/ClienteLayout";
import { jwt } from "../../helpers";
import { FullScreenloader } from "../../components/Components";
import { useUpdateCliente } from "../../Hooks/useUpdateCliente";

const pattern =
  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

const ProfilePage = ({ user }) => {
  const [loader, setLoader] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { updateClient } = useUpdateCliente(setLoader);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      EMAIL: user.EMAIL,
      IDUSUARIO: user.IDUSUARIO,
      LASTNAME: user.LASTNAME,
      NAME: user.NAME,
      PHONE: user.PHONE,
      USERNAME: user.USERNAME,
    },
  });

  const handelUpdateUser = (data) => {
    if (!data.PASSWORD) {
      delete data.PASSWORD;
    }
    setIsEdit(false);
    updateClient(data);
  };

  return (
    <ClienteLayout>
      <Box
        component={"div"}
        display="flex"
        justifyContent="space-between"
        my={1}
      >
        <FullScreenloader display={loader} />
        <Typography variant="h1" component="h1">
          {user.USERNAME}
        </Typography>
        {!isEdit && (
          <Button
            variant="outlined"
            startIcon={<CreateIcon />}
            onClick={() => setIsEdit(true)}
          >
            Editar
          </Button>
        )}
      </Box>
      <form onSubmit={handleSubmit(handelUpdateUser)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nombres"
              variant="outlined"
              color="warning"
              fullWidth
              defaultValue={user.NAME}
              disabled={!isEdit}
              {...register("NAME", {
                required: "El nombre de la dirección es requerido",
                pattern: {
                  value: /^[A-Za-z 0-9ñ ,.;áéíóú]+$/i,
                  message: "No se permiten caracteres especiales",
                },
              })}
              error={!!errors.NAME}
              helperText={errors.NAME?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Apellidos"
              variant="outlined"
              color="warning"
              fullWidth
              defaultValue={user.LASTNAME}
              disabled={!isEdit}
              {...register("LASTNAME", {
                required: "El nombre de la dirección es requerido",
                pattern: {
                  value: /^[A-Za-z 0-9ñ ,.;áéíóú]+$/i,
                  message: "No se permiten caracteres especiales",
                },
              })}
              error={!!errors.LASTNAME}
              helperText={errors.LASTNAME?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Teléfono"
              variant="outlined"
              color="warning"
              fullWidth
              defaultValue={user.PHONE}
              disabled={!isEdit}
              {...register("PHONE", {
                required: "El número de teléfono es requerido",
                pattern: {
                  value: /[\d+]/,
                  message: "El número ingresado no es válido",
                },
              })}
              error={!!errors.PHONE}
              helperText={errors.PHONE?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Nombre de usuario"
              variant="outlined"
              color="warning"
              fullWidth
              disabled={!isEdit}
              defaultValue={user.USERNAME}
              InputProps={{
                readOnly: true,
              }}
              {...register("USERNAME", {
                required: "El nombre de usuario es requerido",
                pattern: {
                  value: /^[A-Za-z0-9ñ]+$/i,
                  message: "Solo es permitido caracteres alfanuméricos",
                },
              })}
              error={!!errors.USERNAME}
              helperText={errors.USERNAME?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Correo electrónico"
              variant="outlined"
              color="warning"
              fullWidth
              defaultValue={user.EMAIL}
              disabled={!isEdit}
              {...register("EMAIL", {
                required: "El correo electrónico es requerido",
                pattern: {
                  value: pattern,
                  message: "El correo ingresado no es válido",
                },
              })}
              error={!!errors.EMAIL}
              helperText={errors.EMAIL?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Actualizar contraseña"
              variant="outlined"
              color="warning"
              type="password"
              fullWidth
              placeholder="Dejar en blanco para mantener la clave"
              disabled={!isEdit}
              {...register("PASSWORD", {
                minLength: { value: 4, message: "Mínimo 4 caracteres" },
              })}
              error={!!errors.PASSWORD}
              helperText={errors.PASSWORD?.message}
            />
          </Grid>
          {isEdit && (
            <Grid item xs={12} display="flex" justifyContent={"center"} py={1}>
              <Button type="submit" size="large">
                Guardar cambios
              </Button>
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
    return {
      props: {
        user: data,
      },
    };
  } catch (error) {
    Cookies.remove("SESSION_ID");
    return {
      redirect: {
        destination: "/menu",
        permanent: false,
      },
    };
  }
};
