const User = require('../models/user_model');

module.exports = {

  createUser(req, res, next) {
    const userProps = req.body;
    User.create(userProps)
      .then(response => res.status(200).send({ user: response, message: "User successfully added!" }))
      .catch(next);
  },

  readAllUsers(req, res, next) {
    User.find({})
      .then((response) => {
        if (response.length === 0) {
          res.status(200).send({ users: response, message: "No Users found." });
        } else {
          res.status(200).send({ users: response, message: "Users successfully retrieved!" });
        }
      })
      .catch(next);
  },

  readOneUser(req, res, next) {
    User.findOne({ $or: [{ username: req.params.user }, { authID: req.params.user }] })
      .then((response) => {
        if (response === null) {
          res.status(404).send({ error: "User does not exist." });
        } else {
          res.status(200).send({ user: response, message: "User successfully retrieved!" });
        }
      })
      .catch(next);
  },

  updateOneUser(req, res, next) {
    const userProps = req.body;
    User.findOneAndUpdate({ $or: [{ username: req.params.user }, { authID: req.params.user }] }, userProps, { new: true })
      .then((response) => {
        if (response === null) {
          res.status(404).send({ error: "User does not exist." });
        } else {
          res.status(200).send({ user: response, message: "User successfully updated!" });
        }
      })
      .catch(next);
  },

  destroyUser(req, res, next) {
    User.findOneAndRemove({ $or: [{ username: req.params.user }, { authID: req.params.user }] } )
      .then((response) => {
        if (response === null) {
          res.status(404).send({ error: "User does not exist." });
        } else {
          res.status(200).send({ message: "User successfully deleted!" });
        }
      })
      .catch(next);
  }
};