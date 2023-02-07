const router = require("express").Router();

router.get("/", function (req, res) {
  res.send("404");
});

module.exports = router;
