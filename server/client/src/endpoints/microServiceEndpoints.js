/* 
Adapted from the flow of the backend. 
*/

import axios from "axios";
import MicroServiceEndpoint from "../keys";

export const saveFavorites = async (userID, selected) => {
  try {
    const response = await axios.post('/api/save-faves', {
      userID: userID,
      favorites: selected,
    });

    if (response.status === 200) {
      console.log('Favorites saved successfully');
    }
  } catch (error) {
    console.error('Error saving favorites:', error);
  }
};
export const fetchFavorites = async (user_id) => {
  try {
    const res = await axios.get(`${MicroServiceEndpoint}/favorites/${user_id}`);
    return res.data.favorites;
  } catch (error) {
    console.error("Error fetching favorites from microservice:", error);
  }
};
