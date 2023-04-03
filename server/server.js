const express = require("express");
const app = express();
const router = require("./routes/route");
const passport = require("passport");
const bodyParser = require("body-parser");
const auth = require("./Auth/passport-config");
const flash = require("express-flash");
const session = require("express-session");

app.use(flash());
app.use(
  session({
    secret: "shhhh",
    resave: true,
    rolling: true,
    saveUninitialized: false,
    // cookie: { expires: 300 * 1000 },
  })
);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
auth(passport);
app.use(router);
const port = 8080;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
