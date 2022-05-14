import Image from "next/image";
import css from "../../../styles/Reservation.module.scss";
import dinner from "../../../public/Img/dinner2.jpg";

const date = new Date();

export const Reservation = () => {
  const fecha = date.toISOString().split("T")[0];
  const hora = date.toTimeString().split(' ')[0].slice(0,-3);
  return (
    <section className={css.section} id="reservaciones">
      <div className="container-lg">
        <div className="row">
          <div className={`col-12 col-md-6`}>
            <div className={`${css.sub_contenedor}`}>
              <div className={css.reserva}>
                <h2>Hacer una reserva</h2>
                <form>
                  <div className="row">
                    <div className="col mt-4">
                      <input type="date" className="form-control" min={fecha} placeholder={fecha} value={fecha}/>
                    </div>
                    <div className="col mt-4">
                      <input
                        type="time"
                        className="form-control"
                        placeholder="13:00"
                        value={hora}
                        min="12:30"
                        max="23:00"
                      />
                    </div>
                    <div className="col mt-4">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Personas"
                        min="1"
                        max="50"
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombres y Apellidos"
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Correo electrónico"
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col">
                      <input
                        type="telf"
                        className="form-control"
                        placeholder="Télefono"
                      />
                    </div>
                  </div>
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
