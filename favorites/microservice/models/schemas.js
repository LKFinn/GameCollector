const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define schema for favorite objects
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
    default: true,
  },
});

const Bug = mongoose.model("bugs", bugSchema);
// Define schema for a user with favorites.
const userFaveSchema = new Schema({
  userID: String,
  favorites: [bugSchema],
});
// Create the Mongoose model for user favorites
const UserFavoritesModel = mongoose.model("userFaves", userFaveSchema);
