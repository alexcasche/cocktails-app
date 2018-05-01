const app = require('express')(),
  dotenv = require('dotenv').config(),
  cors = require('cors'),
  bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const indexRoute = require('./routes/index');
const cocktailRoutes = require('./routes/cocktail_routes');
const userRoutes = require('./routes/user_routes');

const helpers = require('./helpers/app_helpers');

app.use(cors());

app.use(indexRoute);
app.use(cocktailRoutes);
app.use(userRoutes);

app.use((err, req, res, next) => {
  if(err) {
    let errorMessage = "";
    let errorsArray = helpers.objToArray(err.errors).reverse();
    errorsArray.forEach((error) => {
      errorMessage += `${helpers.capitalize(error.value.message)}. `; 
    });
    errorMessage = errorMessage.slice(0,-1);
    res.status(422).send({ error: errorMessage });
  }
});

module.exports = app;