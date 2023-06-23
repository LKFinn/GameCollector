const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/schemas");
const cors = require("cors");

// Define model for a user with favorites
const UserFavorites = mongoose.model("userFaves");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/logged-in/:userID", async (req, res) => {
  const userID = req.params.userID;

  try {
    const existingUser = await UserFavorites.findOne({ userID });
    if (!existingUser) {
      return res.status(404).json({ error: "User not found, please sign up" });
    }
    const favorites = existingUser.favorites;
    return res.status(200).json({ favorites });
  } catch (error) {
    console.error("Error fetching user favorites:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching user favorites" });
  }
});

// routes: GC microservice sends a user to save in the database:
// Every record will have an existing user.
app.post("/favorites/new-user/:_id", async (req, res) => {
  try {
    const userID = req.params._id;
    console.log("Message received");
    // check for existing record
    const existingUser = await UserFavorites.findOne({ userID });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // create a new record with the passed in ID:
    const newUserFavorites = new UserFavorites({
      userID: userID,
    });

    // Save the new record to the database
    await newUserFavorites.save();
    res.status(200).json({ message: "New user created successfully" });
    if (res.status === 200) {
      console.log("New user created successfully.");
    }
  } catch (error) {
    console.error("Error creating new user:", error);
    res.status(500).json({
      error: "An error occurred while creating the new user record",
    });
  }
});

app.put("/favorites/update/:userID", async (req, res) => {
  console.log("New Favorites Received");
  const userID = req.params.userID;
  const favorites = req.body.favorites;
  try {
    const document = await UserFavorites.findOne({ userID });
    if (!document) {
      return res.status(404).json({ error: "Document not found" });
    }
    for (const newFavorite of favorites) {
      const existingFavoriteIndex = document.favorites.findIndex(
        (favorite) => favorite.name === newFavorite.name
      );
      if (existingFavoriteIndex === -1) {
        document.favorites.push(newFavorite);
      } else {
        document.favorites[existingFavoriteIndex] = newFavorite;
      }
    }
    const updatedDocument = await document.save();
    if (updatedDocument) {
      return res.json({ message: "New favorites saved" });
    } else {
      return res.status(500).json({
        error: "An error occurred while saving the new favorites",
      });
    }
  } catch (error) {
    console.error("Error updating document:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while updating the document" });
  }
});

app.get("/favorites/:userID", async (req, res) => {
  try {
    const userID = req.params.userID;
    const userFavorites = await UserFavorites.findOne({ userID });

    if (!userFavorites) {
      return res.status(404).json({ message: "User favorites not found" });
    }

    // Extract the favorites array from the userFavorites object
    const favorites = userFavorites.favorites;
    res.status(200).json({ favorites });
  } catch (error) {
    console.error("Error fetching user favorites:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3005;
mongoose.connect(keys.MicroServiceURI).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
});
