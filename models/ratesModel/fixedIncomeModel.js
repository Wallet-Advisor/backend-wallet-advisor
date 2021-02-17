const db = require("../../data/dbConfig");

module.exports = {
    add,
    find,
    update
  };

  
async function add(rates) {
    const newRates = await db("fixed_income")
      .insert(rates)
      // .returning("*");
    return newRates;
  }

  async function find() {
    const foundRates = await db('fixed_income')
    return foundRates;
  }
  async function update(rates) {
    const updatedRates = await db("fixed_income")
      .where({ isp: rates.isp })
      .update(rates)
      .returning("*")
      // .then((newRates) => newRates[0]);
      return updatedRates
  }