import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useAddAddress } from "../../../Hooks";

const initDataForm = {
  NAME: "",
  STREET1: "",
  STREET2: "",
  PHONEDIR: "",
  REFERENCE: "",
  DEFAULTDIR: false,
};

export const ModalAddAddress = ({
  isEdit = false,
  initData = initDataForm,
  setIsEdit,
  setOpen,
  setLoader,
}) => {
  const title = isEdit ? "Editar dirección" : "Agregar dirección";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initData });

  const { addAddress, editAddress } = useAddAddress(setLoader);

  const handleClickCancel = () => {
    setLoader(false);
    setIsEdit(false);
    setOpen(false);
  };
  const handleSubmitAddress = (data) => {
    if (isEdit) {
      editAddress(data);
      setIsEdit(false);
    } else {
      addAddress(data);
    }
    reset();
    setOpen(false);
  };
  return (
    <Box
      component={"div"}
      className="modalItem"
      textAlign={"center"}
      padding="10px 25px"
    >
      <Typography variant="h1" component="h2">
        {title}
      </Typography>
      <form onSubmit={handleSubmit(handleSubmitAddress)} noValidate>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12}>
            <TextField
              label="Nombre de la dirección"
              color="warning"
              fullWidth
              required
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
          <Grid item xs={12} md={6}>
            <TextField
              label="Calle principal"
              color="warning"
              fullWidth
              required
              {...register("STREET1", {
                required: "La calle principal es requerido",
                pattern: {
                  value: /^[A-Za-z 0-9ñ ,.;áéíóú]+$/i,
                  message: "No se permiten caracteres especiales",
                },
              })}
              error={!!errors.STREET1}
              helperText={errors.STREET1?.message}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Calle secundaria"
              color="warning"
              fullWidth
              required
              {...register("STREET2", {
                required: "La calle secundaria es requerido",
                pattern: {
                  value: /^[A-Za-z 0-9ñ ,.;áéíóú]+$/i,
                  message: "No se permiten caracteres especiales",
                },
              })}
              error={!!errors.STREET2}
              helperText={errors.STREET2?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Teléfono"
              color="warning"
              fullWidth
              required
              {...register("PHONEDIR", {
                required: "El télefono es requerido",
                minLength: {
                  value: 7,
                  message: "El número de teléfono es muy corto",
                },
                maxLength: {
                  value: 12,
                  message: "El número de teléfono es muy extenso",
                },
                pattern: {
                  value: /^[+\d]+$/,
                  message: "El teléfono solo debe tener números",
                },
              })}
              error={!!errors.PHONEDIR}
              helperText={errors.PHONEDIR?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Referencia"
              color="warning"
              fullWidth
              multiline
              maxRows={4}
              required
              {...register("REFERENCE", {
                required: "La referencia es requerida",
                pattern: {
                  value: /^[A-Za-z 0-9ñ ,.;áéíóú]+$/i,
                  message: "No se permiten caracteres especiales",
                },
              })}
              error={!!errors.REFERENCE}
              helperText={errors.REFERENCE?.message}
            />
          </Grid>
          <Grid item xs={12} display="flex" justifyContent={"flex-start"}>
            <FormControlLabel
              label="Seleccionar dirección como predefinida"
              labelPlacement="start"
              control={<Checkbox {...register("DEFAULTDIR")} />}
            />
          </Grid>
        </Grid>
        {isEdit && (
          <Button
            sx={{ marginTop: "10px", marginRight: "10px" }}
            color="error"
            size="large"
            variant="outlined"
            onClick={handleClickCancel}
          >
            Cancelar
          </Button>
        )}
        <Button type="submit" sx={{ marginTop: "10px" }} size="large">
          Guardar dirección
        </Button>
      </form>
    </Box>
  );
};
