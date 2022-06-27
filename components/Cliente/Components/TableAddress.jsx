import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Modal,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ModalAddAddress } from "./ModalAddAddress";
import { FullScreenloader } from "../../Components";
import { useAddAddress } from "../../../Hooks";

export const TableAddress = ({ addresess, open, setOpen }) => {
  const [editAddress, setEditAddress] = useState(false);
  const [currentAddress, setCurrentAddress] = useState({});
  const [loader, setLoader] = useState(false);
  const { deleteAddress } = useAddAddress(setLoader);

  const handleClickEdit = (address) => {
    setOpen(true);
    setEditAddress(true);
    setCurrentAddress(address);
  };

  const handleClickDelete = (data) => {
    const dataAddress = {
      id: data.IDDIRECCION,
      name: data.NAME,
    };
    deleteAddress(dataAddress);
  };

  return (
    <TableContainer component={Paper}>
      <FullScreenloader display={loader} />
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Calle Principal</TableCell>
            <TableCell>Calle Secundaria</TableCell>
            <TableCell>Teléfono</TableCell>
            <TableCell>Referencia</TableCell>
            <TableCell>Defecto</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {addresess.map((address) => (
            <TableRow
              key={address.IDDIRECCION}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{address.NAME}</TableCell>
              <TableCell>{address.STREET1}</TableCell>
              <TableCell>{address.STREET2}</TableCell>
              <TableCell>{address.PHONEDIR}</TableCell>
              <TableCell>{address.REFERENCE}</TableCell>
              <TableCell>
                {address.DEFAULTDIR ? (
                  <Chip label="Si" color="success" />
                ) : (
                  <Chip label="No" color="error" />
                )}
              </TableCell>
              <TableCell
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
                <EditIcon
                  cursor="pointer"
                  onClick={() => handleClickEdit(address)}
                />
                <DeleteIcon
                  color="error"
                  cursor="pointer"
                  onClick={() => handleClickDelete(address)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        className="modalContainer"
      >
        {editAddress ? (
          <ModalAddAddress
            setOpen={setOpen}
            initData={currentAddress}
            setIsEdit={setEditAddress}
            isEdit={editAddress}
            setLoader={setLoader}
          />
        ) : (
          <ModalAddAddress setLoader={setLoader} setOpen={setOpen} />
        )}
      </Modal>
    </TableContainer>
  );
};
