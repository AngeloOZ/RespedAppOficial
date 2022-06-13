import css from "../../../styles/Contacto.module.scss";

export const Contacto = () => {
  return (
    <section className={css.contenedor_contacto} id="contacto">
      <div className="container-fluid" data-height-100>
        <div className="row g-0 d-flex  flex-column-reverse" data-height-100>
          <div className="col-12 col-md-6" data-height-100>
            <div className={css.contenedor_mapa} data-height-100>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d255267.41257061885!2d-78.3342501540625!3d-1.442838173714416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfogon%20de%20coz!5e0!3m2!1ses-419!2sec!4v1650577331160!5m2!1ses-419!2sec"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className={css.contenedor_form}>
              <div className={css.text_contect}>
                <h2>PÓNGANSE EN CONTACTO CON NOSOTROS</h2>
                <p>Su dirección de correo electrónico no será publicada. Los campos obligatorios están marcados *</p>
              </div>
              <form>
                <div className="row mt-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombres y Apellidos*"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Correo electrónico*"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <input
                      type="telf"
                      className="form-control"
                      placeholder="Télefono*"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <textarea
                      className="form-control"
                      placeholder="Mensaje"
                    ></textarea>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <button
                      type="submit"
                      className={`btn ${css.button_reserve}`}
                    >
                    Enviar mensaje
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
