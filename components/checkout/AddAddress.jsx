import { useForm } from "react-hook-form";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useAddAddress } from "../../Hooks";

export const AddAddress = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { addAddress } = useAddAddress();

  const handleAddRegisterAddress = (data) => {
    addAddress(data);
    // reset();
  };

  return (
    <Grid item xs={12} md={4}>
      <Typography
        variant="h2"
        fontSize={24}
        mb={2}
        mt={{ xs: 5, md: 0 }}
        fontWeight="bold"
        component="h2"
      >
        Registrar Dirección
      </Typography>
      <form onSubmit={handleSubmit(handleAddRegisterAddress)} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Nombre de la dirección"
              variant="filled"
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
          <Grid item xs={12}>
            <TextField
              label="Calle principal"
              variant="filled"
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
          <Grid item xs={12}>
            <TextField
              label="Calle secundaria"
              variant="filled"
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
              variant="filled"
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
              variant="filled"
              multiline
              rows={2}
              fullWidth
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
          <Grid item xs={12}>
            <FormControlLabel
              label="Seleccionar dirección como predefinida"
              labelPlacement="start"
              control={<Checkbox defaultChecked />}
              {...register("DEFAULTDIR")}
            />
          </Grid>
          <Grid item xs={12}>
            <Button size="large" type="submit" fullWidth>
              Guardar dirección
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};
