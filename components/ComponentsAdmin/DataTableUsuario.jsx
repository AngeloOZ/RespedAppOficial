import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useUsuarios } from "../../Hooks/useUsuarios";

const columns = [
  { field: 'IDUSUARIO', headerName: 'IDUSUARIO' },
  { field: 'IDTIPOUSUARIO', headerName: 'IDTIPOUSUARIO', width: 300 },
  { field: 'USERNAME', headerName: 'USERNAME', width: 600 },
  { field: 'EMAIL', headerName: 'EMAIL' },
  { field: 'NAME', headerName: 'NAME', width: 300 },
  { field: 'LASTNAME', headerName: 'LASTNAME', width: 600 },
  { field: 'PHONE', headerName: 'PHONE', width: 300 }
 ]
 
 const DataTable = () => {
 
 
   return (
     <div style={{ height: 700, width: '100%' }}>
       <DataGrid
         rows={useUsuarios()}
         columns={columns}
         pageSize={12}
         checkboxSelection
         onSelectionModelChange={({ selectionModel }) => {
           const rowIds = selectionModel.map(rowId => parseInt(String(rowId), 10));
           const rowsToDelete = tableData.filter(row => rowIds.includes(row.id));
           setDeletedRows(rowsToDelete);
           console.log(deletedRows);
         }}
       />
     </div>
   )
 }
 
 export default DataTable

