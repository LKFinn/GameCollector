/* 
Adapted from the flow of the backend. 
*/
import axios from "axios";
import MicroServiceEndpoint from "../keys"

export const fetchCurrentBugs = async (hour, month) => {
  const endpoint = `/api/find-bugs/date-time/${hour}/${month}`;
  try {
    const res = await axios.get(endpoint);
    return res.data; // Return the response data as is
  } catch (error) {
    console.log("Error fetching current bugs:", error);
    return [];
  }
};
export const fetchGoingExtinctBugs = async (month) => {
  try {
    const res = await axios.get(`/api/find-bugs/extinct/${month}`);
    return res.data;
  } catch (error) {
    console.log("Error fetching going extinct bugs:", error);
    return [];
  }
};
export const fetchAllBugs = async (month) => {
  try {
    const res = await axios.get(`/api/find-bugs/`);
    return res.data;
  } catch (error) {
    console.log("Error fetching going extinct bugs:", error);
    return [];
  }
};