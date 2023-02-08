module.exports = (req, res, next) => {
  // console.log("user: " + JSON.stringify(req.user));
  if (!req.user) {
    res.status(401).json({
      message: "chưa đăng nhập",
    });
  }
  next();
};
