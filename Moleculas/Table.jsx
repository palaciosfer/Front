import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Paper } from "@mui/material";

const rows = [
  { id: 1, name: "Amigo", age: 10 },
  { id: 2, name: "Prueba", age: 25 },
  { id: 3, name: "Jake", age: 35 },
  { id: 4, name: "Burrayes", age: 1 },
  { id: 5, name: "Fercho", age: 3 },
  { id: 6, name: "Luis", age: 22 },
  { id: 7, name: "Ana", age: 27 },
  { id: 8, name: "Carlos", age: 30 },
  { id: 9, name: "Sofia", age: 19 },
  { id: 10, name: "Miguel", age: 40 },
  { id: 11, name: "Andrea", age: 28 },
  { id: 12, name: "Jorge", age: 33 },
  { id: 13, name: "Elena", age: 21 },
  { id: 14, name: "Pablo", age: 37 },
  { id: 15, name: "Claudia", age: 26 },
  { id: 16, name: "Ricardo", age: 31 },
  { id: 17, name: "Marta", age: 24 },
  { id: 18, name: "Roberto", age: 29 },
  { id: 19, name: "Lucia", age: 23 },
  { id: 20, name: "Hector", age: 38 },
  { id: 21, name: "Isabel", age: 20 },
  { id: 22, name: "Francisco", age: 36 },
  { id: 23, name: "Laura", age: 32 },
  { id: 24, name: "Eduardo", age: 34 },
  { id: 25, name: "Patricia", age: 27 },
  { id: 26, name: "Raul", age: 41 },
  { id: 27, name: "Sara", age: 22 },
  { id: 28, name: "David", age: 30 },
  { id: 29, name: "Ines", age: 19 },
  { id: 30, name: "Mario", age: 35 },
  { id: 31, name: "Teresa", age: 26 },
  { id: 32, name: "Julian", age: 33 },
  { id: 33, name: "Beatriz", age: 21 },
  { id: 34, name: "Gonzalo", age: 37 },
  { id: 35, name: "Victoria", age: 25 },
  { id: 36, name: "Fernando", age: 28 },
  { id: 37, name: "Alicia", age: 24 },
  { id: 38, name: "Sergio", age: 29 },
  { id: 39, name: "Monica", age: 23 },
  { id: 40, name: "Alberto", age: 38 },
  { id: 41, name: "Nuria", age: 20 },
  { id: 42, name: "Oscar", age: 36 },
  { id: 43, name: "Eva", age: 31 },
  { id: 44, name: "Javier", age: 34 },
  { id: 45, name: "Silvia", age: 27 },
  { id: 46, name: "Vicente", age: 41 },
  { id: 47, name: "Angela", age: 22 },
  { id: 48, name: "Manuel", age: 30 },
  { id: 49, name: "Cristina", age: 19 },
  { id: 50, name: "Rafael", age: 35 }
];

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "name", headerName: "Nombre", width: 300 },
  { field: "age", headerName: "Edad", type: "number", width: 100 }
];

const DataTable = ({ className }) => {
  return (
    <Box sx={{ display: "flex", width: "100%", height: 400 }} className={className}>
      <Paper elevation={3} sx={{ padding: 2, width: "100%", height: "100%", overflow: "auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5} // Muestra 5 filas por página
          rowsPerPageOptions={[5, 10, 25]}
          pagination 
                    />
      </Paper>
    </Box>
  );
};

export default DataTable;
