/* 
/ Citation: Adapted from Stephen Grider's "Modern React with Redux" from Udemy. 
*/

const passport = require("passport");

module.exports = (app) => {
  // Send to google to log in.
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/user");
    }
  );

  // user logged out.
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Current user, found via user token.
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
