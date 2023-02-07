var authRouter = require("./auth");
var userRouter = require("./users");

function routes(app) {
  app.use("/auth", authRouter);
  app.use("/user", userRouter);
}

module.exports = routes;
