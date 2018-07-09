


const config = process.env.NODE_ENV || 'development';
const environment = require('../knexfile');
const knex = require('knex')(environment[config]);

module.exports = knex;
