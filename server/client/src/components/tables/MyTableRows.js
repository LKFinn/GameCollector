/* 
Adapted from MUI's API documentation and all of my tears. 
*/

import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TableRow from "@mui/material/TableRow";

function MyTableRows({ row, index, isRowChecked, handleRowToggle }) {
  return (
    <TableRow key={index}>
      <TableCell padding="checkbox">
        <Checkbox
          checked={isRowChecked(row.id)}
          onClick={() => handleRowToggle(row.id)}
          icon={<FavoriteBorderIcon />}
          checkedIcon={<FavoriteIcon />}
          sx={{
            color: "pink",
            "&.Mui-checked": {
              color: "pink",
            },
          }}
        />
      </TableCell>
      {row.cells.map((cell, cellIndex) => (
        <TableCell key={cellIndex}>{cell}</TableCell>
      ))}
    </TableRow>
  );
}

export default MyTableRows;
