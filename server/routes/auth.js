const express = require("express");
const passport = require("passport");
const router = express.Router();
//FE
const successLoginUrl = "http://localhost:3005/login/success";
const errorLoginUrl = "http://localhost:3005/login/error";

router.get(
  "/azure/login",
  passport.authenticate("azuread-openidconnect"),
  () => {
    console.log("heelo");
  }
);
router.get(
  "/redirect",
  passport.authenticate("azuread-openidconnect", {
    failureRedirect: errorLoginUrl,
    successRedirect: successLoginUrl,
    failureMessage: "Cannot login to Google, please try again later!",
  }),
  (req, res) => {
    console.log("User: ", req.user);
    res.send("Thank you for signing in!");
  }
);

module.exports = router;
