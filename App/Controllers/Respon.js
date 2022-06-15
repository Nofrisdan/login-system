const respon = (code, res, data = "", msg = "") => {
  res.status(code).json({
    data,
    msg,
  });
};

export default respon;
