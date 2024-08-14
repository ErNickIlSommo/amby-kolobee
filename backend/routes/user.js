import express from "express";

// import { userModel } from "./models/user.js"

const router = express.Router();

router.get("/", (req, res, next) => {
  return res.json({
    routes: "User",
    method: req.method,
    url: req.url,
  });
});

router.post("/", (req, res, next) => {
  return res.json({
    routes: "User",
    method: req.method,
    url: req.url,
  });
});

export default router;
