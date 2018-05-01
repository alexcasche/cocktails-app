const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost');

mongoose.Promise = Promise;

module.exports.Cocktail = require("./cocktail_model");
module.exports.User = require("./user_model");