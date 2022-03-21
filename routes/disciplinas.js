var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("disciplinas", { title: "disciplinas" });
});

module.exports = router;
