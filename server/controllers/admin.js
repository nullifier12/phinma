const sql = require("../db/init");
const passport = require("passport");
module.exports = {
  getAccount: async (req, res) => {
    res.send(req.user);
    // console.log(req.session);
  },
};
