import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import emailjs from "@emailjs/browser";

import { SweetAlert } from "../../../helpers";
import { FullScreenloader } from "../../Components";
import css from "../../../styles/Contacto.module.scss";

export const Contacto = () => {
  const [laoder, setLaoder] = useState(false);

  async function sendEmail(e) {
    setLaoder(true);
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        "service_3yycfvc",
        "template_8q2jual",
        e.target,
        process.env.NEXT_PUBLIC_MAIL_ID
      );
      setLaoder(false);
      SweetAlert.success({
        title: "Correo Enviado",
        text: "El restaurante ha recibido su mensaje, pronto nos contactaremos",
        confirmButtonText: "Cerrar",
      });
    } catch (error) {
      setLaoder(false);
      console.error(error);
      SweetAlert.error({
        title: "Ups, parece que hubo un error",
        text: "Intentelo más tarde",
        confirmButtonText: "Cerrar",
      });
    }
    e.target.reset();
  }
  return (
    <section className={css.contenedor_contacto} id="contacto">
      <FullScreenloader display={laoder} />
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
                <p>
                  Su dirección de correo electrónico no será publicada. Los
                  campos obligatorios están marcados *
                </p>
              </div>
              <form onSubmit={sendEmail}>
                <Grid container rowSpacing={2} mt={0.1}>
                  <Grid item xs={12}>
                    <TextField
                      label="Nombres y Apellidos"
                      variant="filled"
                      required
                      size="small"
                      type={"text"}
                      fullWidth
                      name="from_name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Correo electrónico"
                      variant="filled"
                      required
                      size="small"
                      type={"email"}
                      fullWidth
                      name="to_name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Teléfono"
                      variant="filled"
                      required
                      size="small"
                      type={"tel"}
                      fullWidth
                      name="reply_to"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Mensaje"
                      variant="filled"
                      type={"text"}
                      size="small"
                      multiline
                      fullWidth
                      name="message"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" fullWidth>
                      Enviar mensaje
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
