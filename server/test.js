const express = require("express");

const app = express();

app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});



const express = require("express");
const mongoose = require("mongoose");
const keys = require('./config/keys')
require('./models/user')
require("./services/passport");

// mongoose.connect(keys.mongoURI);
const app = express();

// Call our routes
require("./routes/authRoutes")(app);

// dynamic port listening:
const PORT = process.env.port || 3005;
app.listen(PORT);