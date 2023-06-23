/* 
This monster was all me. 
*/

const mongoose = require("mongoose");

async function importBugData(Schema, data) {
  console.log(Schema);
  try {
    const count = await Schema.countDocuments();
    if (count === 0) {
      await Schema.insertMany(data);
      console.log(`Schema data imported successfully!`);
    } else {
      console.log(`Schema collection is not empty. Skipped data import.`);
    }
  } catch (error) {
    console.error(`Error importing Schema data:`, error);
  }
}

module.exports = importBugData;


// Put this code into index.js if you need to reload json data
// For importing JSON into a collection. 
// const importBugData = require("./services/loadJSON");
/* require("./models/bug");
require("./models/fish");
const Bugs = mongoose.model("bugs");
const Fish = mongoose.model("fish")
// Data for the app\
const bugsData = require("./data/bugs.json");
const fishData = require("./data/fish.json");

importBugData(Bugs, bugsData);
importBugData(Fish, fishData); */
