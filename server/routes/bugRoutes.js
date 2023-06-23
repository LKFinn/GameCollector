/* 
Citations:
Adapted from Leila Finn and Joanna Kang's CS 340 final, which was adapted from bezkoder's walkthrough on rest API for mysql. As well as 290s project which handled querying mongoose. 
Accessed on 3/01/2023
Source URL: https://www.bezkoder.com/node-js-rest-api-express-mysql/
*/

const bugController = require("../controllers/bugs.controllers");

module.exports = (app) => {
  // Route to get all bugs based on a filter
  app.get("/api/find-bugs", bugController.findBugs);

  // Route to get a bug by name
  app.get("/api/find-bugs/name/:name", bugController.findBugByName);

  app.post("/api/find-bugs/many", bugController.findManyBugsByName);

  app.get(
    "/api/find-bugs/date-time/:targetTime/:targetMonth",
    bugController.findBugsDateAndTime
  );

  app.get("/api/find-bugs/time/:time", bugController.findBugsByTime);

  app.get("/api/find-bugs/month/:month", bugController.findBugsByMonth);

  app.get(
    "/api/find-bugs/location/:location",
    bugController.findBugsByLocation
  );
  app.get(
    "/api/find-bugs/price/:minPrice/:maxPrice",
    bugController.findBugsByPrice
  );

  app.get("/api/find-bugs/extinct/:month", bugController.goingExtinctBugs);
};
