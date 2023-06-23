/* 
Adapted from MUI's API documentation and all of my tears. 
*/

import React, { useState, useEffect } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";

import Pagination from "./Pagination";
import TableHeader from "./TableHeader";
import MyTableRows from "./MyTableRows";

function TableFormat({
  type,
  headers,
  rows,
  title,
  selectedRows,
  setSelectedRows,
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRowToggle = (id) => {
    const selectedRow = rows.find((row) => row.id === id);
    const isSelected = isRowChecked(id);
    let updatedSelectedRows = [...selectedRows];

    if (isSelected) {
      updatedSelectedRows = updatedSelectedRows.filter(
        (row) => row.id !== selectedRow.id
      );
    } else {
      const updatedRow = { ...selectedRow, favorite: true };
      updatedSelectedRows.push(updatedRow);
    }

    setSelectedRows(updatedSelectedRows);
  };

  const isRowChecked = (id) => {
    return selectedRows.some((row) => row.id === id);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const displayedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHeader
          headers={headers}
          title={title}
        />
        <TableBody>
          {displayedRows.map((row, index) => (
            <MyTableRows
              key={row.id}
              row={row}
              index={row.id}
              isRowChecked={isRowChecked}
              handleRowToggle={handleRowToggle}
            />
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={headers.length + 1} />
            </TableRow>
          )}
        </TableBody>
        <Pagination
          headers={headers}
          rows={rows}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Table>
    </TableContainer>
  );
}

export default TableFormat;
