const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

//User Model
const User = require("../../models/User");

// @route GET api/users
// @desc Register User
// @access Public
router.get("/", (req, res) => {
  const { name, email, password } = req.json;

  //Simple Validation
  if (!name || !email || !password) {
    return res.status(400), json({ msg: "Please enter al fields" });
  }

  //Check for existing users
  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    //Create a new user
    const newUser = new User({
      name,
      email,
      password,
    });

    // Create salt hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          res.json({
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
          });
        });
      });
    });
  });
});

module.exports = router;
