import { useContext, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { Grid, TextField } from "@mui/material";

import { AuthContext } from "../../../context";
import css from "../../../styles/Reservation.module.scss";
import dinner from "../../../public/Img/dinner2.jpg";
import { useReservation } from "../../../Hooks";
import { FullScreenloader } from "../../Components";

const date = new Date();
const fecha = date.toISOString().split("T")[0];
const hora = date.toTimeString().split(" ")[0].slice(0, -3);

export const Reservation = () => {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [displayLoader, setDisplayLoader] = useState(false);
  const { registerReservation } = useReservation(setDisplayLoader);

  const handleSubmitReservation = (data) => {
    if (!isLoggedIn) {
      return router.push(`/auth/login?p=/#reservaciones`);
    }
    registerReservation(data);
    reset();
  };

  return (
    <section className={css.section} id="reservaciones">
      <FullScreenloader display={displayLoader} />
      <div className="container-lg">
        <div className="row">
          <div className={`col-12 col-md-6`}>
            <div className={`${css.sub_contenedor}`}>
              <div className={css.reserva}>
                <h2>Hacer una reserva</h2>
                <form onSubmit={handleSubmit(handleSubmitReservation)}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextField
                        variant="filled"
                        label="Fecha"
                        type={"date"}
                        fullWidth
                        inputProps={{ min: fecha }}
                        defaultValue={fecha}
                        {...register("fecha", {
                          required: "Este campo es requerido",
                          min: {
                            value: fecha,
                            message:
                              "La reservación no puede ser de fechas anteriores a la actual",
                          },
                        })}
                        helperText={errors.fecha?.message}
                        FormHelperTextProps={{ style: { color: "#fff" } }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="filled"
                        label="Hora de la reserva"
                        type={"time"}
                        fullWidth
                        inputProps={{ min: "12:30", max: "23:00" }}
                        defaultValue={hora}
                        {...register("hora", {
                          required: "La hora es obligatoria",
                          min: {
                            value: "12:30",
                            message:
                              "El horario de atención es de 12:30 a 23:00",
                          },
                          max: {
                            value: "23:00",
                            message:
                              "El horario de atención es de 12:30 a 23:00",
                          },
                        })}
                        helperText={errors.hora?.message}
                        FormHelperTextProps={{ style: { color: "#fff" } }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="filled"
                        type={"number"}
                        label="Número de personas"
                        fullWidth
                        inputProps={{ min: 1, max: 50 }}
                        {...register("personas", {
                          required: "El número de personas es obligatorio",
                          min: {
                            value: 1,
                            message: "El número de personas es de 1 a 50",
                          },
                          max: {
                            value: 50,
                            message: "El número de personas es de 1 a 50",
                          },
                        })}
                        helperText={errors.personas?.message}
                        FormHelperTextProps={{ style: { color: "#fff" } }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="filled"
                        label="Notas de la reserva"
                        multiline
                        maxRows={5}
                        fullWidth
                        {...register("notas", {
                          pattern: {
                            value: /^[A-Za-z 0-9ñ ,.;áéíóú]+$/i,
                            message:
                              "Solo es permitido caracteres alfanuméricos",
                          },
                        })}
                        helperText={errors.notas?.message}
                        FormHelperTextProps={{ style: { color: "#fff" } }}
                      />
                    </Grid>
                  </Grid>
                  <div className="row mt-4">
                    <div className="col">
                      <button
                        type="submit"
                        className={`btn ${css.button_reserve}`}
                      >
                        Realizar reservación
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={`col-12 col-md-6`}>
            <div
              className={`${css.sub_contenedor} d-flex justify-content-center`}
            >
              <Image src={dinner} alt="Cena Fogon de COZ" objectFit="cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
