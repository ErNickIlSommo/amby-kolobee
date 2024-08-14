// Modules
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// util
import { PORT, mongoDBURL } from "./config.js";

// Routes
import userRoute from "./routes/user.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use("/api/v1/user", userRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to DataBase");
    app.listen(PORT, (req, res, next) => {
      console.log("Server Listening on port:", PORT);
    });
  })
  .catch((error) => console.error(error));
