import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Paper } from "@mui/material";

const rows = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Jake", age: 35 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Jake", age: 35 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Jake", age: 35 },
];

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Nombre", width: 150 },
  { field: "age", headerName: "Edad", type: "number", width: 110 },
];

const DataTable = ({ className }) => {
  return (
    <Box sx={{ display: "flex", flexGrow: 1, width: "100%" }} className={className}>
      <Paper elevation={3} sx={{ padding: 2, flexGrow: 1 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={100}
          rowsPerPageOptions={[25, 50, 100]}
          pagination
        />
      </Paper>
    </Box>
  );
};

export default DataTable;
