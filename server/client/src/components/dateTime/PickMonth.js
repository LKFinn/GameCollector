/* 
Adapted from MUI's API documentation
*/

import React, { useState } from "react";
import { DatePicker, DatePickerToolbar } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { TextField } from "@mui/material";

function PickMonth({ onSelectMonth }) {
  const [month, setMonth] = useState(dayjs());

  const handleMonthSelection = (newMonth) => {
    const selectedMonth = parseInt(dayjs(newMonth).format("MM"), 10);
    const updatedMonth = dayjs(month).month(selectedMonth - 1);
    setMonth(updatedMonth);
    onSelectMonth(selectedMonth); // Pass the selected month back to the UserPage component
  };

  const YearRestrictedToolbar = (props) => {
    return (
      <DatePickerToolbar
        {...props}
        disableYearSelection
      />
    );
  };

  return (
    <div>
      <DatePicker
        openTo="month"
        views={["month"]}
        value={dayjs(month)}
        onChange={handleMonthSelection}
        slotProps={{
          actionBar: {
            actions: ["accept", "cancel", "today"],
          },
        }}
        components={{
          TextField: TextField, // Use the TextField component as the input renderer
        }}
        ToolbarComponent={YearRestrictedToolbar}
      />
    </div>
  );
}

export default PickMonth;
