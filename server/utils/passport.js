const passport = require("passport");
const AzureAdOAuth2Strategy = require("passport-azure-ad-oauth2").Strategy;
const config = require("../config");
var jwt = require("jwt-simple");
passport.use(
  new AzureAdOAuth2Strategy(
    {
      clientID: config.azure_client_id,
      clientSecret: config.azure_client_secret,
      callbackURL: config.redirect_url,
      resource: config.graph_api_endpoint,
      tenant: config.azure_tenant_id,
    },
    (accessToken, refreshToken, profile, done) => {
      // User authentication logic goes here
      return done(null, profile);
    }
  )
);
passport.serializeUser(function (user, done) {
  console.log("profile : ", user);
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  console.log("profile : ", user);
  done(null, user);
});
