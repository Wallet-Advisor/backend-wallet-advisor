const db = require("../../data/dbConfig");

module.exports = {
    add,
    find
  };

  
async function add(rates) {
    const newRates = await db("money_market")
      .insert(rates)
      .returning("*");
    return newRates;
  }

  async function find() {
    const foundRates = await db('money_market')
    return foundRates;
  }