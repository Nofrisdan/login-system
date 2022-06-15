import respon from "../Controllers/Respon.js";
import { tb_user } from "../Models/models.js";
const auth = async (req, res, next) => {
  const token = req.params.token;

  // check database
  const validasi = await tb_user.findOne({
    where: {
      token: token,
    },
  });

  if (validasi !== null) {
    next();
  } else {
    respon(403, res, null, "Permission Denied!!");
  }

  // const dataUser =
  //   if (email == "admin@admin.com" && password == "admin123") {
  //     next();
  //   } else {
  //     respon(403, res, null, "Username Dan password anda salah");
  //   }
};

export default auth;
