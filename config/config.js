var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    validUsers = require('./valid-users.json'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'cofflog-exp'
    },
    port: 3000,
    db: 'mongodb://localhost/cofflog-exp-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'cofflog-exp'
    },
    port: 3000,
    db: 'mongodb://localhost/cofflog-exp-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'cofflog-exp',
      validUsers: validUsers
    },
    port: 3000,
    db: 'mongodb://localhost/cofflog-exp-production'
  }
};

module.exports = config[env];
