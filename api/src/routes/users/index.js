const router = require("express").Router();
const faker = require("faker");
const getUsers = require("../../utils/getUsers");

router.get("/", function(req, res) {
  res.json(getUsers(faker.random.number({ min: 10, max: 25 })));
});

module.exports = router;
