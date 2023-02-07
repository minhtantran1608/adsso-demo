const AzureAdOAuth2Strategy = require("passport-azure-ad").OIDCStrategy;
const config = require("../config");
var jwt = require("jwt-simple");
passport.use(
  new AzureAdOAuth2Strategy(
    {
      clientID: config.client_id,
      clientSecret: config.client_secret,
      callbackURL: config.redirect_url,
      resource: config.graph_api_endpoint,
      tenant: config.tenant_id,
    },
    function (iss, sub, profile, access_token, refresh_token, done) {
      var waadProfile = profile || jwt.decode(params.id_token, "", true);

      // User.findOrCreate({ id: waadProfile.upn }, function (err, user) {
      //   done(err, user);
      // });
      done(err, waadProfile);
    }
  )
);
this.passport.serializeUser(function (user, done) {
  console.log("profile : ", user);
  done(null, user);
});

this.passport.deserializeUser(function (user, done) {
  console.log("profile : ", user);
  done(null, user);
});
