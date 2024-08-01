import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
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

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "public/temp/",
  })
);
// this will allow some assets like images favicon to use
app.use(express.static("public"));

// Cookie Parser Setting
app.use(cookieParser());

// importing routes
import userRouter from "./routes/user.routes.js";
app.use("/api/v1/users", userRouter);

export { app };
