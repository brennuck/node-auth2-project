const router = require("express").Router();

const Departments = require("./departments-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, (req, res) => {
  Departments.find()
    .then((department) => {
      res.status(200).json(department);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: error.message });
    });
});

module.exports = router;
