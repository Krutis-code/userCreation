const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { findOneAndUpdate } = require("../models/user.model");

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
  });
  res.send({ message: "User was registered successfully!" });
};

exports.signin = (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });


      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        accessToken: token
      });
    });
};

exports.getAllUsers = async (req, res) => {
  try {
    let { page, size } = req.query;
    const AllUSers = await User.find().skip(page * size).limit(size);
    if (AllUSers.length === 0) {
      res.status(400).send({ users: [] });
      return
    }
    res.status(200).send({ users: AllUSers });
  } catch (error) {
    res.send(error)
  }
}

exports.setFavourite = async (req, res) => {
  try {
    let { email, favourite } = req.body;
    const user = await User.findOneAndUpdate({ email: email }, { favourite }, { returnOriginal: false });
    res.status(200).send({ updatedUserData: user });
  } catch (error) {
    res.send(error);
  }
}