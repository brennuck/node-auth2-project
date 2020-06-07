const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");
const checkDepartment = require("../auth/check-department-middleware.js");

router.get("/", restricted, checkDepartment("user"), (req, res) => {
  Users.find()
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});

module.exports = router;
