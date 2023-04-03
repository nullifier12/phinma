const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const sql = require("../db/init");

module.exports = function (passport) {
  // let username = req.body.emp_email;
  passport.use(
    new LocalStrategy((username, password, done) => {
      sql("tbl_accounts")
        .where("phn_username", username)
        .then(async (result) => {
          if (result.length === 0) {
            return done(null, false);
          }
          await bcrypt.compare(password, result[0].phn_pass).then((res) => {
            // console.log(res);
            if (res) {
              return done(null, result[0]);
            } else {
              return done(null, false);
            }
          });
        })
        .catch((err) => {
          console.log("this is done");
          console.log(err);
        });
    })
  );
  passport.serializeUser((user, done) => {
    // console.log(user.emp_empnum);
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    // console.log(emp_empnum);
    sql("tbl_accounts")
      .where("id", id)
      .then((result) => {
        // console.log(result);
        const infoOfUser = {
          id: result[0].id,
          username: result[0].phn_username,
          role: result[0].phn_role,
        };
        done(null, infoOfUser);
      });
    // console.log("this is no error");
  });
};
