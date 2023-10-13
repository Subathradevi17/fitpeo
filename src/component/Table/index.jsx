import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(productName, stock, price, totalSales) {
  return { productName, stock, price, totalSales };
}

const rows = [
  createData("John", 32, 6, 10),
  createData("Joe", 32, 9, 15),
  createData("Jai", 32, 16, 20),
  createData("Kav", 32, 3, 10),
  createData("Sky", 32, 16, 25),
];

export default function Tables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell align='right'>Stock</StyledTableCell>
            <StyledTableCell align='right'>Price</StyledTableCell>
            <StyledTableCell align='right'>Total Sales</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component='th' scope='row'>
                {row.productName}
              </StyledTableCell>
              <StyledTableCell align='right'>{row.stock}</StyledTableCell>
              <StyledTableCell align='right'>{row.price}</StyledTableCell>
              <StyledTableCell align='right'>{row.totalSales}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
