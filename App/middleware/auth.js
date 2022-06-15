import respon from "../Controllers/Respon.js";
const auth = (req, res, next) => {
  const token = "nxtrix0600";
  const userToken = req.params.token;

  if (token == userToken) {
    next();
  } else {
    respon(403, res, null, "Permision Denied!!");
  }

  // check database
  //   if (email == "admin@admin.com" && password == "admin123") {
  //     next();
  //   } else {
  //     respon(403, res, null, "Username Dan password anda salah");
  //   }
};

export default auth;
