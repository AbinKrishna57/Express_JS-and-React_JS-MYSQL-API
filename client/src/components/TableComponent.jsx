import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const TableComponent = ({ data }) => {
  if (!data.length) return <Typography>No data available</Typography>;

  const headers = Object.keys(data[0]);

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label="employee table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#c1d8c0" }}>
            {headers.map((header) => (
              <TableCell key={header} sx={{ fontWeight: "bold" }}>
                {header.toUpperCase()}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((rowData, rowIndex) => (
            <TableRow
              key={rowIndex}
              sx={{
                "&:nth-of-type(odd)": { backgroundColor: "#4a7856" },
                "&:nth-of-type(even)": { backgroundColor: "#77ab85" },
              }}
            >
              {headers.map((key, colIndex) => (
                <TableCell key={colIndex}>{rowData[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
