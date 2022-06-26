import { Grid,Paper,Tipography} from "@mui/material"
import { GridSumary } from "../../components/ComponentsAdmin/GridSumary"
import { AdminLayout } from "../../components/layouts/AdminLayout"
import Cookies from "js-cookie";
import React, { useState, useEffect } from 'react';

export default function Admin() {
  const [data,setData] = useState(null);

useEffect(() => {
  const token1 = Cookies.get("SESSION_ID") ? Cookies.get("SESSION_ID") : "";
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: token1 })
};
fetch('https://respedapp.onrender.com/api/auth/validate-token', requestOptions).then((res) => res.json())
.then((result) => setData(result))
});

const payload = data?data.data:[];
var currentdate = new Date(); 
var fecha = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + "  "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  
  return (
    <AdminLayout>
      <Grid>
        <div>
        <Paper elevation={3}>
          <p><b>Bienvenido,</b></p>
          <p>{payload.USERNAME?payload.USERNAME:""}</p>
            <p><b>Fecha:</b>{fecha}</p>
          
            
        </Paper>
          </div>
          
      </Grid>
        <GridSumary />
        
    </AdminLayout>
  )
}