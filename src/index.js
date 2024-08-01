// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./database/db_config.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log("ERROR NAME : ", error);
  });

// Approch 1
/*
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log(error);
      throw error;
    });

    app.listen(process.env.PORT, () =>
      console.log("Server is running on port 3000")
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
})();
*/
