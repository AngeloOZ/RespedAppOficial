import { Box,Button,Divider, Grid, Typography ,Modal} from "@mui/material";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import React from 'react';

export const PagosBox = ({orden,fecha}) => {

  function sendEmail() {
    emailjs.send("service_3yycfvc","template_19mlxo4",{
      from_name: "username",
      to_name: orden.NUMPEDIDO,
      message: fecha,
      reply_to: orden.VALORTOTAL,
      },'vXddR9uNczkmMp5MM')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}
  
  const [modalPago, setModalPago] = useState(false);
  const [modalPago1, setModalPago1] = useState(false);
  const abrirCerrarModalPagoExitoso = () => {
    setModalPago(!modalPago);
  };
  const abrirCerrarModalPagoFallido= () => {
    setModalPago1(!modalPago1);
  };
  const bodyPago = (
    <Box
      sx={{
        position: "absolute",
        width: "350px",
        backgroundColor: "#ffff",
        border: "2px solid #000",
        boxShadow: "1px",
        padding: "10px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        margin: "auto",
        align: "center",
      }}
    >
      <div align="center">
        <h2>
          Pago realizado con éxito
        </h2>
        <p>
          Gracias por realizar tu pago, muy pronto te entregaremos tu orden
        </p>
        <Button
          variant="outlined"
          color="warning"
          sx={{ m: 2 }}
          onClick={() => abrirCerrarModalPagoExitoso()}
        >
          Ok
        </Button>
      </div>
    </Box>
  );
  const bodyPago1 = (
    <Box
      sx={{
        position: "absolute",
        width: "350px",
        backgroundColor: "#ffff",
        border: "2px solid #000",
        boxShadow: "1px",
        padding: "10px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        margin: "auto",
        align: "center",
      }}
    >
      <div align="center">
      <h2>
          Error de Pago
        </h2>
        <p>
          Hubo un problema al realizar el pago, intentar nuevamente por favor
        </p>

        <Button
          variant="outlined"
          color="warning"
          sx={{ m: 2 }}
          onClick={() => abrirCerrarModalPagoFallido()}
        >
          Ok
        </Button>
      </div>
    </Box>
  );
   const initialOptions = {
      "client-id": "AZGOscV8DH6ICjWDxs8WOs08KFjZj9KsC1nUua-fIOhcGrLTRlKaxFtno2qQs6ihU6Y-IwiPuo2iZ9xM",
      currency: "USD",
      intent: "capture"
  };
  return (
    <>
      <Typography variant="h3" fontWeight={400} mt={2}>
        Pago en línea (Opcional)
      </Typography>
      <Divider sx={{ my: 1 }} />
      <Grid container  direction="column" alignItems="center"justifyContent="center" >
        <Grid item xs={6}>
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
                        console.log(details)
                        const name = details.payer.name.given_name;
                        if(details.status=='COMPLETED'){
                          abrirCerrarModalPagoExitoso();
                          sendEmail();
                        }
                        else{
                          abrirCerrarModalPagoFallido();
                        }
                        
                    });
                }}
            />
        </PayPalScriptProvider>
        
        </Grid>
        
      </Grid>
      <Divider sx={{ my: 1 }} />
      <Modal open={modalPago} onClose={abrirCerrarModalPagoExitoso}>
        {bodyPago}
      </Modal>
      <Modal open={modalPago1} onClose={abrirCerrarModalPagoFallido}>
        {bodyPago1}
      </Modal>
    </>
  );
};
