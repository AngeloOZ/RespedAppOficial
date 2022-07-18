import {
  Table,
  TableRow,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  Modal,
  Button,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { SweetAlert } from "../../helpers";
import { mutate } from "swr";

const DataTableUsuario = ({ users, tipo }) => {
  const [data, setData] = useState([]);
  const [password, setPassword] = useState(false);
  const [textPassword, setTextPassword] = useState("");

  const url = "/usuario/";

  const [usuarioSeleccionade, setUsuarioSeleccionade] = useState({
    IDTIPOUSUARIO: tipo,
    USERNAME: "",
    NAME: "",
    LASTNAME: "",
    EMAIL: "",
    PASSWORD: "",
    PHONE: "",
  });

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setUsuarioSeleccionade((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleChange2 = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setTextPassword(value);
    setPassword(true);
    setUsuarioSeleccionade((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let nombreTipo;
  if (tipo == 1) {
    nombreTipo = "ADMINISTRADOR";
  }
  if (tipo == 2) {
    nombreTipo = "MESERO";
  }
  if (tipo == 3) {
    nombreTipo = "CLIENTE";
  }
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  if (users === undefined) {
    users = [];
  }
  const abrirCerrarModalInsertar = () => {
    setModalInsertar(!modalInsertar);
  };
  const abrirCerrarModalEditar = () => {
    setTextPassword("");
    setPassword(false);
    setModalEditar(!modalEditar);
  };
  const abrirCerrarModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  const seleccionarusuario = (user, caso) => {
    setUsuarioSeleccionade(user);
    caso === "Editar" ? abrirCerrarModalEditar() : abrirCerrarModalEliminar();
  };

  const bodyInsertar = (
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
        {
          <Typography sx={{ color: "#f57c00", margin: 1 }}>
            <b> INSERTAR {nombreTipo} </b>
          </Typography>
        }
      </div>

      <TextField
        required
        label="Username"
        sx={{ width: 300, margin: 2 }}
        color="warning"
        onChange={handleChange}
        name="USERNAME"
      >
        {" "}
      </TextField>
      <TextField
        label="Nombre"
        sx={{ width: 300, margin: 2 }}
        color="warning"
        onChange={handleChange}
        name="NAME"
      >
        {" "}
      </TextField>
      <TextField
        label="Apellido"
        sx={{ width: 300, margin: 2 }}
        color="warning"
        onChange={handleChange}
        name="LASTNAME"
      >
        {" "}
      </TextField>
      <TextField
        required
        label="Email"
        sx={{ width: 300, margin: 2 }}
        color="warning"
        onChange={handleChange}
        name="EMAIL"
      >
        {" "}
      </TextField>
      <TextField
        required
        label="Teléfono"
        sx={{ width: 300, margin: 2 }}
        color="warning"
        onChange={handleChange}
        name="PHONE"
      >
        {" "}
      </TextField>
      <TextField
        required
        label="Contraseña"
        sx={{ width: 300, margin: 2 }}
        color="warning"
        onChange={handleChange}
        name="PASSWORD"
      >
        {" "}
      </TextField>
      <div align="center">
        <Button
          variant="outlined"
          color="warning"
          sx={{ m: 2 }}
          onClick={() => peticionPost()}
        >
          Aceptar
        </Button>
        <Button
          onClick={() => abrirCerrarModalInsertar()}
          variant="outlined"
          color="warning"
          sx={{ m: 2 }}
        >
          Cancelar
        </Button>
      </div>
    </Box>
  );

  const bodyEditar = (
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
        {
          <Typography sx={{ color: "#f57c00", margin: 1 }}>
            <b> EDITAR {nombreTipo}</b>
          </Typography>
        }
      </div>

      <TextField
        label="Username"
        sx={{ width: 300, margin: 2 }}
        color="warning"
        onChange={handleChange}
        name="USERNAME"
        value={usuarioSeleccionade && usuarioSeleccionade.USERNAME}
      >
        {" "}
      </TextField>
      <TextField
        label="Nombre"
        sx={{ width: 300, margin: 2 }}
        color="warning"
        onChange={handleChange}
        name="NAME"
        value={usuarioSeleccionade && usuarioSeleccionade.NAME}
      >
        {" "}
      </TextField>
      <TextField
        label="Apellido"
        sx={{ width: 300, margin: 2 }}
        color="warning"
        onChange={handleChange}
        name="LASTNAME"
        value={usuarioSeleccionade && usuarioSeleccionade.LASTNAME}
      >
        {" "}
      </TextField>
      <TextField
        label="Email"
        sx={{ width: 300, margin: 2 }}
        color="warning"
        onChange={handleChange}
        name="EMAIL"
        value={usuarioSeleccionade && usuarioSeleccionade.EMAIL}
      >
        {" "}
      </TextField>
      <TextField
        label="Teléfono"
        sx={{ width: 300, margin: 2 }}
        color="warning"
        onChange={handleChange}
        name="PHONE"
        value={usuarioSeleccionade && usuarioSeleccionade.PHONE}
      >
        {" "}
      </TextField>
      <TextField
        inputMode="password"
        label="Contraseña"
        sx={{ width: 300, margin: 2 }}
        color="warning"
        onChange={handleChange2}
        name="PASSWORD"
        value={textPassword}
      >
        {" "}
      </TextField>
      <div align="center">
        <Button
          variant="outlined"
          color="warning"
          sx={{ m: 2 }}
          onClick={() => peticionPut()}
        >
          Aceptar
        </Button>
        <Button
          onClick={() => abrirCerrarModalEditar()}
          variant="outlined"
          color="warning"
          sx={{ m: 2 }}
        >
          Cancelar
        </Button>
      </div>
    </Box>
  );

  const bodyEliminar = (
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
        <p>
          ¿Estás seguro que deseas eliminar el usuario{" "}
          <b>{usuarioSeleccionade && usuarioSeleccionade.USERNAME}</b> ?{" "}
        </p>
      </div>

      <div align="center">
        <Button
          variant="outlined"
          color="error"
          sx={{ m: 2 }}
          onClick={() => peticionDelete()}
        >
          Sí
        </Button>
        <Button
          variant="outlined"
          color="warning"
          sx={{ m: 2 }}
          onClick={() => abrirCerrarModalEliminar()}
        >
          No
        </Button>
      </div>
    </Box>
  );

  const peticionDelete = async () => {
    await axios.delete(url + usuarioSeleccionade.IDUSUARIO).then((response) => {
      mutate("/usuario");
      mutate("/usuario/tipo/1");
      mutate("/usuario/tipo/2");
      mutate("/usuario/tipo/3");
      SweetAlert.success({
        title: "Usuario eliminado",
        text: "El usuario ha sido eliminado correctamente",
        confirmButtonText: "Cerrar",
      });
      setData(
        data.filter(
          (usuario) => usuario.IDUSUARIO !== usuarioSeleccionade.IDUSUARIO
        )
      );
      abrirCerrarModalEliminar();
    });
  };

  const peticionPost = async () => {
    await axios.post(url, usuarioSeleccionade).then((response) => {
      mutate("/usuario");
      mutate("/usuario/tipo/1");
      mutate("/usuario/tipo/2");
      mutate("/usuario/tipo/3");
      setData(data.concat(response.data));
      abrirCerrarModalInsertar();
      SweetAlert.success({
        title: "Usuario creado",
        text: "El usuario ha sido creado correctamente",
        confirmButtonText: "Cerrar",
      });
    });
  };

  const peticionPut = async () => {
    if (password) {
      await axios.put(url, usuarioSeleccionade).then((response) => {
        mutate("/usuario");
        mutate("/usuario/tipo/1");
        mutate("/usuario/tipo/2");
        mutate("/usuario/tipo/3");
        SweetAlert.success({
          title: "Usuario actualizado",
          text: "El usuario ha sido actualizado correctamente",
          confirmButtonText: "Cerrar",
        });
        var dataNueva = data;
        dataNueva.map((usuario) => {
          if (usuarioSeleccionade.IDUSUARIO === usuario.IDUSUARIO) {
            usuario.USERNAME = usuarioSeleccionade.USERNAME;
            usuario.NAME = usuarioSeleccionade.NAME;
            usuario.LASTNAME = usuarioSeleccionade.LASTNAME;
            usuario.EMAIL = usuarioSeleccionade.EMAIL;
            usuario.PHONE = usuarioSeleccionade.PHONE;
            usuario.PASSWORD = usuarioSeleccionade.PASSWORD;
          }
        });
        setData(dataNueva);
        abrirCerrarModalEditar();
      });
    } else {
      var usuarioNuevo = {
        IDTIPOUSUARIO: usuarioSeleccionade.IDTIPOUSUARIO,
        IDUSUARIO: usuarioSeleccionade.IDUSUARIO,
        USERNAME: usuarioSeleccionade.USERNAME,
        NAME: usuarioSeleccionade.NAME,
        LASTNAME: usuarioSeleccionade.LASTNAME,
        EMAIL: usuarioSeleccionade.EMAIL,
        PHONE: usuarioSeleccionade.PHONE,
      };
      await axios.put(url, usuarioNuevo).then((response) => {
        console.log(response);
        SweetAlert.success({
          title: "Usuario actualizado",
          text: "El usuario ha sido actualizado correctamente",
          confirmButtonText: "Cerrar",
        });
        var dataNueva = data;
        dataNueva.map((usuario) => {
          if (usuarioSeleccionade.IDUSUARIO === usuario.IDUSUARIO) {
            usuario.USERNAME = usuarioSeleccionade.USERNAME;
            usuario.NAME = usuarioSeleccionade.NAME;
            usuario.LASTNAME = usuarioSeleccionade.LASTNAME;
            usuario.EMAIL = usuarioSeleccionade.EMAIL;
            usuario.PHONE = usuarioSeleccionade.PHONE;
            usuario.PASSWORD = usuarioSeleccionade.PASSWORD;
          }
        });
        setData(dataNueva);
        abrirCerrarModalEditar();
      });
    }
  };
  return (
    <div style={{ width: "100%" }}>
      {tipo != 3 ? (
        <div>
          <Button onClick={abrirCerrarModalInsertar} color="warning">
            Insertar
          </Button>{" "}
          <br />
        </div>
      ) : null}

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.IDUSUARIO}>
                <TableCell>{user.USERNAME}</TableCell>
                <TableCell>{user.NAME}</TableCell>
                <TableCell>{user.LASTNAME}</TableCell>
                <TableCell>{user.EMAIL}</TableCell>
                <TableCell>{user.PHONE}</TableCell>
                <TableCell width={100} align="center">
                  {tipo != 3 ? (
                    <EditIcon
                      cursor="pointer"
                      onClick={() => seleccionarusuario(user, "Editar")}
                    />
                  ) : null}

                  <DeleteIcon
                    color="error"
                    cursor="pointer"
                    onClick={() => seleccionarusuario(user, "Eliminar")}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={modalInsertar} onClose={abrirCerrarModalInsertar}>
        {bodyInsertar}
      </Modal>

      <Modal open={modalEditar} onClose={abrirCerrarModalEditar}>
        {bodyEditar}
      </Modal>

      <Modal open={modalEliminar} onClose={abrirCerrarModalEliminar}>
        {bodyEliminar}
      </Modal>
    </div>
  );
};

export default DataTableUsuario;
