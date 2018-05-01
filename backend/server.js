const app = require('./app'),
  port = process.env.PORT || 8081,
  IP = process.env.IP,
  mongoose = require('mongoose');

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.DB_HOST);
}

app.listen(port, IP, () => {
  console.log("APP IS RUNNING ON PORT " + port);
});

module.exports = app;