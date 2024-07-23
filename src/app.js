import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// middleware

// cors middleware settings

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Express middleware to allow json configuration
app.use(express.json({ limit: "16kb" }));

// this will allow getting data from URL
// extented true - will allow to provide nested object in url
app.use(express.urlencoded({ extended: true }));

// this will allow some assets like images favicon to use
app.use(express.static("public"));

// Cookie Parser Setting
app.use(cookieParser());

export { app };
