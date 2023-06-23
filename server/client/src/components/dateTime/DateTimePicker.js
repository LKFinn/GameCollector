/* 
Adapted from MUI's API documentation
*/

import React from "react";
import PickTime from "./PickTime";
import PickMonth from "./PickMonth";

function DateTimePicker({ onSelectHour, onSelectMonth }) {
  const handleHourSelection = (selectedHour) => {
    onSelectHour(selectedHour);
  };

  const handleMonthSelection = (selectedMonth) => {
    onSelectMonth(selectedMonth);
  };

  return (
    <div>
      <PickTime onSelectHour={handleHourSelection} />
      <PickMonth onSelectMonth={handleMonthSelection} />
    </div>
  );
}

export default DateTimePicker;
