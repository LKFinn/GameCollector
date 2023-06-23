/* 
Citations:
Adapted from Leila Finn and Joanna Kang's CS 340 final, which was adapted from bezkoder's walkthrough on rest API for mysql. As well as 290s project which handled querying mongoose. 
Accessed on 3/01/2023
Source URL: https://www.bezkoder.com/node-js-rest-api-express-mysql/
Google Auth route logic/flow adapted from Stephen Grider's Udemy course "Modern React with Redux "
*/

const mongoose = require("mongoose");
const { Schema } = mongoose;

const bugSchema = new Schema({
  type: { type: String, default: "Bug" },
  name: String,
  location: String,
  price: Number,
  times: { array: [Number], text: String },
  months: {
    northern: { array: [Number], text: String },
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

const Bug = mongoose.model("bugs", bugSchema);

const findBugs = async (filter) => {
  const query = Bug.find(filter);
  return query.exec();
};

const findBugByName = async (name) => {
  const query = Bug.find(name);
  return query.exec();
};

const findManyBugsByName = async (names) => {
  const query = await Bug.find({ name: { $in: names } });
  return query;
};

const findBugsByLocation = async (location) => {
  const query = Bug.find(location);
  return query.exec();
};

const findBugsDateAndTime = async (filter) => {
  const query = await Bug.find(filter);
  if (query.length > 0) {
    return query;
  } else {
    console.log("No bugs found.");
  }
};

const findBugsByTime = async (time) => {
  const query = await Bug.find(time);
  if (query.length > 0) {
    console.log("Found a bug at the given time");
    return query;
  } else {
    console.log("No bugs found");
  }
};
const findBugsByMonth = async (month) => {
  const query = await Bug.find(month);
  if (query.length > 0) {
    console.log("Found a bug at the given month");
    return query;
  } else {
    console.log("No bugs found");
  }
};
const findBugsByPrice = async (minPrice, maxPrice) => {
  const query = await Bug.find({
    price: { $gte: minPrice, $lte: maxPrice },
  });
  if (query.length > 0) {
    return query;
  } else {
    console.log("No bugs found within the price range");
    return [];
  }
};
const goingExtinctBugs = async (currentMonth) => {
  try {
    const nextMonth = (currentMonth + 1) % 12; // Get the next month

    const query = await Bug.find({
      $and: [
        { "months.northern.array": currentMonth }, // Bug is available in current month
        {
          "months.northern.array": {
            $not: {
              $elemMatch: { $eq: nextMonth }, // Bug is not available in the next month
            },
          },
        },
      ],
      "months.northern.text": { $ne: "Year Round" },
    });

    return query;
  } catch (error) {
    throw new Error("An error occurred while retrieving bugs going extinct.");
  }
};
// Export the necessary items
module.exports = {
  Bug, // Export the Mongoose model
  findBugs,
  findBugByName,
  findBugsByLocation,
  findBugsDateAndTime,
  findBugsByTime,
  findBugsByMonth,
  findBugsByPrice,
  goingExtinctBugs,
  findManyBugsByName,
};
