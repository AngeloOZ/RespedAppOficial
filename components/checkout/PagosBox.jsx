import {
  Divider,
  Grid,
  Typography,
  Modal,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import React from "react";
import { EventNoteTwoTone } from "@mui/icons-material";
import { SweetAlert } from "../../helpers";

export const PagosBox = ({ orden, fecha }) => {
  function sendEmail() {
    emailjs
      .send(
        "service_3yycfvc",
        "template_19mlxo4",
        {
          from_name: "username",
          to_name: orden.NUMPEDIDO,
          message: fecha,
          reply_to: orden.VALORTOTAL,
        },
        process.env.NEXT_PUBLIC_MAIL_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const initialOptions = {
    "client-id": process.env.NEXT_PUBLIC_CLIENT_ID_PAYPAL,
    currency: "USD",
    intent: "capture",
  };
  return (
    <>
      {/* <Divider sx={{ my: 1 }} /> */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h3" fontWeight={400} mt={2}>
            Pagar en línea (Opcional)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: orden.VALORTOTAL,
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  const name = details.payer.name.given_name;
                  if (details.status == "COMPLETED") {
                    SweetAlert.success({
                      title: "Pago realizado con éxito",
                      text: "El restaurante ha recibido su pago, revisa todos los detalles nuevamente y da clic en confirmar",
                    });
                    sendEmail();
                  } else {
                    SweetAlert.error({
                      title: "Ups, parece que hubo un error",
                      text: "Intentelo más tarde",
                    });
                  }
                });
              }}
            />
          </PayPalScriptProvider>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ my: 1 }} />
    </>
  );
};
