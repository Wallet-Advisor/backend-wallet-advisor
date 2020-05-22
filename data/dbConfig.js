const knex = require("knex");
const config = require("../knexfile");
const environment = require("../environment");
module.exports = knex(config[environment]);