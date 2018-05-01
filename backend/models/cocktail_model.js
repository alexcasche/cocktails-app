const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const cocktailSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: "User ID required"
  },
  name: {
    type: String,
    required: "Name is required",
    unique: true
  },
  picture: {
    type: String,
    required: true,
    default: '/img/negroni.jpg'
  },
  ingredients: [{
    name: {
      type: String,
      required: "Ingredients are required"
    },
    quantity: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      required: true
    }
  }],
  directions: [{
    type: String,
    required: "Directions are requried"
  }],
  percentage: {
    type: Number
  },
  calories: {
    type: Number
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  }],
  public: {
    type: Boolean,
    default: true
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

cocktailSchema.plugin(uniqueValidator, { message: '{PATH} already exists' });

const Cocktail = mongoose.model('Cocktail', cocktailSchema);

module.exports = Cocktail;