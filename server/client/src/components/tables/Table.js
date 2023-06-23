/* 
Adapted from MUI's API documentation and all of my tears. 
*/

import React from "react";
import TableFormat from "./TableFormat";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Table({ type, data, title, selectedRows, setSelectedRows }) {
  let headers = [];
  let rows = [];

  switch (type) {
    case "bugs":
      headers = ["Name", "Location", "Price", "Months", "Times"];
      rows = data.map((item, index) => ({
        id: item.name, // Assuming item.name is the unique identifier
        cells: [
          item.name,
          item.location,
          item.price,
          item.months.northern.text,
          item.times.text,
        ],
        favorite: item.favorite,
      }));
      break;
    case "fish":
      headers = ["Name", "Location", "Shadow Size", "Price", "Months", "Times"];
      rows = data.map((item, index) => ({
        id: item.name, // Assuming item.name is the unique identifier
        cells: [
          item.name,
          item.location,
          item.shadow_size,
          item.price,
          item.months.northern.text,
          item.times.text,
        ],
        checked: false,
      }));
      break;
    case "favorites":
      headers = ["Name", "Location", "Price"];
      rows = data.map((item, index) => ({
        id: item.name, // Assuming item.name is the unique identifier
        cells: [item.name, item.location, item.price],
        checked: false,
      }));
      break;
    default:
      headers = [];
      rows = [];
  }

  return (
    <TableFormat
      type={type}
      headers={headers}
      rows={rows}
      title={title}
      selectedRows={selectedRows}
      setSelectedRows={setSelectedRows}
    />
  );
}

export default Table;
