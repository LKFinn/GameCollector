/* 
Adapted from MUI's API documentation and all of my tears. 
*/

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import FavoriteIcon from "@mui/icons-material/Favorite";

function TableHeader({ headers, title }) {
    return (
      <TableHead>
        <TableRow>
          <TableCell colSpan={headers.length + 1} align="center">
            {title}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <FavoriteIcon />
          </TableCell>
          {headers.map((header, index) => (
            <TableCell key={index}>{header}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  export default TableHeader