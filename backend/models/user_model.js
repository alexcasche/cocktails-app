const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
  authID: {
    type: String,
    required: "authID is required",
    unique: true
  },
  email: {
    type: String,
    required: "Email is required",
    unique: true
  },
  username: {
    type: String,
    required: "Username is required",
    unique: true
  },
  picture: {
    type: String
  },
  roles: [{
    type: String,
    required: "Role is required",
    default: "user"
  }],
  status: {
    type: String,
    required: "Status is required",
    default: "active"
  },
  created_date: {
    type: Date,
    required: "Created Date is required",
    default: Date.now
  },
  updated_date: {
    type: Date,
    required: "Updated Date is required",
    default: Date.now
  }
});

userSchema.plugin(uniqueValidator, { message: '{PATH} already exists' });

const User = mongoose.model('User', userSchema);
module.exports = User;