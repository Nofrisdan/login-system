import respon from "./Respon.js";
import connectDb from "../../Config/Database.js";
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
