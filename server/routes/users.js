const isAuthentication = require("../middlewares/isAuthenticate");
const fetch = require("../utils/fetch");
const config = require("../config");
const router = require("express").Router();

router.get("/me", isAuthentication, async function (req, res) {
  try {
    console.log(req?.user?.accessToken);
    const graphResponse = await fetch(
      `${config.graph_api_endpoint}/v1.0/me`,
      req.user.accessToken
    );
    res.json(graphResponse);
  } catch (error) {
    console.log(error);
  }
});

router.get("/", isAuthentication, async function (req, res) {
  try {
    console.log(req?.user?.accessToken);
    const graphResponse = await fetch(
      `${config.graph_api_endpoint}/v1.0/users`,
      req.user.accessToken
    );
    res.json(graphResponse);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
