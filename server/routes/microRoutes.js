/* 
Citations:
Adapted from Leila Finn and Joanna Kang's CS 340 final, which was adapted from bezkoder's walkthrough on rest API for mysql. As well as 290s project which handled querying mongoose. 
Accessed on 3/01/2023
Source URL: https://www.bezkoder.com/node-js-rest-api-express-mysql/
Google Auth route logic/flow adapted from Stephen Grider's Udemy course "Modern React with Redux "
*/

const { saveFaves } = require("../controllers/favorites.controllers");

module.exports = (app) => {

  app.post("/api/save-faves", (req, res) => {
    console.log("Sending Favorite Bugs to the Microservice");
    saveFaves(req, res);
  });
};
