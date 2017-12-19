var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:@localhost:5432/domains';
var db = pgp(connectionString);

module.exports = db;
