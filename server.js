import express from "express";
import cors from "cors";
import Route from "./Config/Routes.js";
const port = 3000,
  server = express();

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(Route);

server.listen(port, () => {
  console.log(`App listen to port ${port}`);
});
