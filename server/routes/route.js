const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();
const passport = require("passport");

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    // console.log("authenticated");
    return next();
  }
  req.universalCookies.remove("authCookie");
  res.redirect("/");
}

router.route("/adminLogin").post((req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      throw err;
    }
    if (!user) {
      res.send(user);
    } else {
      req.login(user, (err) => {
        if (err) {
          throw err;
        }
        res.status(200).send("logged");
        // console.log(req.session);
      });
    }
  })(req, res, next);
});
router
  .route("/getAccount")
  .post(checkAuthenticated, adminController.getAccount);

module.exports = router;
