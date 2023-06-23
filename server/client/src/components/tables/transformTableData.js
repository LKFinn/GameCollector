/* 
My own creation, borne from frustration and tears. 
*/

import React from "react";

const transformTableData = (tableData, type) => {
    return tableData.map((row) => ({
      type: type, 
      name: row.cells[0], 
      favorite: row.favorite,
      location: row.cells[1],
      times: {array:[], text: row.cells[4]},
      months: {northern: { array:[], text: row.cells[3]}},
      price: row.cells[2],
    }));
  };

  export default transformTableData