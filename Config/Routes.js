import express from "express";
import { get_user } from "../App/Controllers/Api.js";
import auth from "../App/middleware/auth.js";

const Route = express.Router();
Route.get("/get-user/:token", auth, get_user);

Route.use("*", (req, res) => {
  res.status(404).json({
    status: 404,
    msg: "Page Not Found",
  });
});
export default Route;
