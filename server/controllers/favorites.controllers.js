/* 
Citations:
Adapted from Leila Finn and Joanna Kang's CS 340 final, which was adapted from bezkoder's walkthrough on rest API for mysql. As well as 290s project which handled querying mongoose. 
Accessed on 3/01/2023
Source URL: https://www.bezkoder.com/node-js-rest-api-express-mysql/
Google Auth route logic/flow adapted from Stephen Grider's Udemy course "Modern React with Redux "
*/

const axios = require("axios");
const keys = require("../config/keys");

const saveFaves = async (req, res) => {
  try {
    const { userID, favorites } = req.body;
    // Send the favorites update request to the microservice
    const response = await axios.put(
      `${keys.MicroServiceEndpoint}/favorites/update/${userID}`,
      { favorites: favorites }
    );

    // Check the response from the microservice
    if (response.data.error) {
      return res.status(500).json({ error: response.data.error });
    }

    res.status(200).json({ message: "favorites saved successfully" });
  } catch (error) {
    console.error("Error saving favorites bugs:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  saveFaves: saveFaves, // Export the saveFaves function
};
