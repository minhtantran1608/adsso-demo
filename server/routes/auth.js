const express = require("express");
const passport = require("passport");
const router = express.Router();
const config = require("../config");
//FE
const successLoginUrl = config.url_fe + "/login/success";
const errorLoginUrl = config.url_fe + "/login/error";

router.get("/azure/login", passport.authenticate("azure_ad_oauth2"));
router.get(
  "/redirect",
  passport.authenticate("azure_ad_oauth2", {
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
