import Image from "next/image";
import { useForm } from "react-hook-form";
import css from "../../../styles/Reservation.module.scss";
import dinner from "../../../public/Img/dinner2.jpg";
import { Grid, TextField } from "@mui/material";

const date = new Date();

export const Reservation = () => {
  const fecha = date.toISOString().split("T")[0];
  const hora = date.toTimeString().split(" ")[0].slice(0, -3);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerReservation = (data) => {
    console.log(data);
  };

  return (
    <section className={css.section} id="reservaciones">
      <div className="container-lg">
        <div className="row">
          <div className={`col-12 col-md-6`}>
            <div className={`${css.sub_contenedor}`}>
              <div className={css.reserva}>
                <h2>Hacer una reserva</h2>
                <form onSubmit={handleSubmit(registerReservation)}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextField
                        variant="filled"
                        label="Fecha"
                        type={"date"}
                        fullWidth
                        inputProps={{ min: fecha }}
                        defaultValue={fecha}
                        {...register("fecha")}
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
                        {...register("hora")}
                        />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="filled"
                        type={"number"}
                        label="Número de personas"
                        fullWidth
                        inputProps={{ min: 1, max: 50 }}
                        {...register("personas")}
                        />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="filled"
                        label="Notas de la reserva"
                        multiline
                        maxRows={5}
                        fullWidth
                        {...register("notas")}
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
