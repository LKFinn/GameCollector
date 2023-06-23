const mongoose = require("mongoose");
const { Schema } = mongoose;

const fishSchema = new Schema({
  type: {
    type: String,
    default: "Fish",
  },
  name: String,
  location: String,
  shadow_size: String,
  price: Number,
  times: {
    array: [Number],
    text: String,
  },
  months: {
    northern: {
      array: [Number],
      text: String,
    },
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

mongoose.model("fish", fishSchema);
