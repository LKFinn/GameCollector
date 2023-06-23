/* 
Citations:
Adapted from: Medium's tutorial "How to Create A Digital Clock With React Hooks"
Accessed on: 4/22/23 
Link: https://medium.com/programming-essentials/how-to-create-a-digital-clock-with-react-hooks-aa30f76cfe3f
*/

import { React, useState, useEffect } from "react";



function Clock() {
  const now = new Date();
  const [time, setTime] = useState(now);
  const [date, setDate] = useState(now);
  const clockRefresh = () => setTime(new Date());

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
    const timerId = setInterval(clockRefresh, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <div className = "ClockBanner-Font">
        Current Time:&nbsp;
        {time.toLocaleTimeString()}
      </div>
      <div>
        Current Date:&nbsp;
        {now.toLocaleDateString("en-us", options)}
      </div>
    </div>
  );
}

export default Clock;
