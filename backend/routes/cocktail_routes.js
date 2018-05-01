const routes = require('express').Router();
const CocktailsController = require('../controllers/cocktail_controller');

/*  Create Cocktails */
routes.post('/api/cocktails', CocktailsController.createCocktail);

/*  Read Cocktails  */
routes.get('/api/cocktails', CocktailsController.readAllCocktails);

module.exports = routes;