const routes = require('express').Router();
const UsersController = require('../controllers/user_controller');

/*  CREATE User */
routes.post('/api/users', UsersController.createUser);

/*  READ Users  */
routes.get('/api/users', UsersController.readAllUsers);
routes.get('/api/user/:user', UsersController.readOneUser);

/*  UPDATE User  */
routes.put('/api/user/:user', UsersController.updateOneUser);

/*  DESTROY User  */
routes.delete('/api/user/:user', UsersController.destroyUser);

module.exports = routes;