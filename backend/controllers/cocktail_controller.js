const Cocktail = require('../models/cocktail_model');

module.exports = {

  createCocktail(req, res, next) {
    const cocktailProps = req.body;
    Cocktail.create(cocktailProps)
      .then(cocktail => res.send(cocktail))
      .catch(next);
  },

  readAllCocktails(req, res, next) {  
    Cocktail.find({}).sort({"name": 1})
      .then((response) => {
        if (response.length === 0) {
          res.status(200).send({ cocktails: response, message: "No cocktails found." });
        } else {
          res.status(200).send({ cocktails: response, message: "Cocktails successfully retrieved!" });
        }
      })
      .catch(next);
  },

  destroyCocktail(req, res, next) {
    const cocktailId = req.params.id;
    Cocktail.findByIdAndRemove(cocktailId)
      .then(cocktail => res.status(204).send(cocktail))
      .catch(next);
  }

};