import css from "../../styles/Reservation.module.scss";

export const Reservation = ({fecha}) => {
    return (
        <section className={css.section}>
            <div className="container-lg">
                <div className="row">
                    <div className={`col-12 col-md-6`}>
                        <div className={`${css.sub_contenedor}`}>
                            <div className={css.reserva}>
                                <h2>Hacer una reserva</h2>
                                <form>
                                    <div className="row">
                                        <div className="col">
                                            <input type="date" className="form-control" min={fecha}/>
                                        </div>
                                        <div className="col">
                                            <input type="time" className="form-control" placeholder="Hora" min="12:30" max="23:00"/>
                                        </div>
                                        <div className="col">
                                            <input type="number" className="form-control" placeholder="Personas" min="1" max="50"/>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Nombres y Apellidos"/>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col">
                                            <input type="email" className="form-control" placeholder="Correo electrónico"/>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col">
                                            <input type="telf" className="form-control" placeholder="Télefono"/>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col">
                                            <button type="submit" className={`btn ${css.button_reserve}`} >Realizar reservación</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={`col-12 col-md-6`}>
                        <div className={`${css.sub_contenedor}`}>
                            <img src="/img/dinner2.jpg" alt="Cena Fogon de COZ" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}