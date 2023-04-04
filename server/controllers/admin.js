const sql = require("../db/init");
const passport = require("passport");
module.exports = {
  getAccount: async (req, res) => {
    res.send(req.user);
    console.log(req.user);
    // console.log(req.session);
  },
  newRequest: async (req, res) => {
    // console.log(req.body);
    const reqCollection = [JSON.stringify(req.body.requestcollection)];

    await sql("tbl_newreq")
      .insert({
        nr_fname: req.body.firstname,
        nr_mname: req.body.middlename,
        nr_lname: req.body.lastname,
        nr_email: req.body.email,
        nr_course: req.body.course,
        nr_department: req.body.department,
        nr_phone: req.body.phoneno,
        nr_address: req.body.address,
        nr_yearlvl: req.body.yearlevel,
        nr_undergrad: req.body.undergrad,
        nr_company: req.body.currentCompany,
        nr_position: req.body.position,
        nr_price: req.body.paymentTotal,
        nr_schoolid: req.body.schpolid,
        nr_form: reqCollection,
      })
      .then((result) => {
        res.send("success");
      });
  },
  getAllnewRequest: async (req, res) => {
    // await sql("tbl_newreq")
    //   .select('*')
    //   .then((result) => {
    //     res.send(result);

    //   });
    await sql
      .raw(`SELECT *,JSON_UNQUOTE(nr_form) from tbl_newreq`)
      .then((result) => {
        res.send(result[0]);
      });
  },
  getRegistrar: async (req, res) => [
    await sql("tbl_accounts")
      .where("phn_role", "registrar")
      .then((result) => {
        res.send(result);
      }),
  ],
};
