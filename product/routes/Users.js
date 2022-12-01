const express = require("express");
const { sequelize } = require("../models");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async (req, res) => {
  listUser = await Users.findAll();
  res.json(listUser);
});

router.route("/").post(async (req, res) => {
  const { fName, lName, username, number, email, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
        Users.create({
          fName: fName,
          lName: lName,
          username: username,
          number: number,
          email : email,
          password: hash,
        });
        res.json("Added user successfully");
      });
});


router.route("/login").post(async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ where: { email: email } });
  if (!user) {
    res.json({ error: "This user doesnot exist" });
    return;
  }

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) res.json({ error: "Wrong Username And Password Combination" });
    // else res.json({alert: "welcome"});
  })
  const accessToken = sign(
    {
      username: user.username,
      id: user.id,
      email: user.email,
      password: user.password,
      verify: user.verify,
    },
    "veryimportant"
  );
  res.json(accessToken);
});

router.route("/authorization").get(validateToken, (req, res) => {
  const userflexId = req.user;
  console.log(userflexId);
  res.json(userflexId);
});

module.exports = router;
