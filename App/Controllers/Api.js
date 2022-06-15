import respon from "./Respon.js";
import { tb_user } from "../Models/models.js";
import bcrypt from "bcrypt";

export const get_user = (req, res) => {
  // res.status(200).json();

  const d = {
    status: 200,
    data: [
      {
        nama_user: "Andrian",
        email: "andrian@gmail.com",
      },
      {
        nama_user: "Agung",
        email: "agung@gmail.com",
      },
    ],
  };

  respon(200, res, d);
};

export const login = (req, res) => {};

export const register = (req, res) => {};

// testing
export const testing = async (req, res) => {
  const email = "nofrisdansitopu22@gmail.com";
  const salt = await bcrypt.genSalt(10);
  const token = bcrypt.hashSync(email, salt);

  const data = {
    status: 200,
    data: {
      token,
      email,
    },
  };

  respon(200, res, data, null);
};
