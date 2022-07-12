import { useContext } from "react";

import { AuthContext } from "../../context/Auth";

import { Paper, Grid, Card, CardContent, Typography } from "@mui/material";

const GridUsuario = ({ fecha }) => {
  const { username } = useContext(AuthContext);

  return (
    <div>
      <Grid sx={{ margin: 1 }}>
        <div>
          <Paper elevation={3}>
            <Card>
              <CardContent>
                <div>
                  <Typography sx={{ fontSize: 32 }}>
                    Bienvenido, <b>{username}</b>
                  </Typography>
                </div>
                <div>
                  <Typography>Fecha: {fecha}</Typography>
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
