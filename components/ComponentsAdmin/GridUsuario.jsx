


import React from "react";
import { Paper,Grid,Card, CardContent, Typography } from "@mui/material";
import jwt_decode from 'jwt-decode';

const GridUsuario = ({ token, fecha }) => {
   var decoded;
   try {
      decoded = jwt_decode(token);
   } catch (error) {
      decoded={
         "IDUSUARIO": '',
         "USERNAME": '',
         "TIPO": ''
      };
   }
   
  return (
    <div>
     <Grid sx={{margin: 1}}>
        <div>
        <Paper elevation={3}>
         <Card>
            <CardContent>
               <div>
               {/* {CHEQUEAR ESTO} */}
               <Typography>{decoded.USERNAME}</Typography> 
               </div>
               <div>
               <Typography>{fecha}</Typography> 
               </div>
            </CardContent>
         </Card>    
        </Paper>
          </div>
          
      </Grid>
    </div>
  );
};

export default GridUsuario;
