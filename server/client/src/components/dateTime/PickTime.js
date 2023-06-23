/* 
Adapted from MUI's API documentation
*/

import React, { useState } from "react";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";

function PickTime({ onSelectHour }) {
  const [time, setTime] = useState(dayjs());

  const handleTimeSelection = (newValue) => {
    const selectedHour = parseInt(dayjs(newValue).format("H"), 10);
    setTime(newValue);
    onSelectHour(selectedHour); // Pass the selected hour back to the UserPage component
  };

  return (
    <div>
      <TimePicker
        defaultValue={dayjs()}
        value={time}
        onChange={handleTimeSelection}
        slotProps={{
          actionBar: {
            actions: ["cancel"],
          },
        }}
      />
    </div>
  );
}

export default PickTime;
