const db = require("../../data/dbConfig");

module.exports = {
    add,
    find, 
    update
  };

  
async function add(rates) {
    const newRates = await db("equity")
      .insert(rates)
      // .returning("*");
    return newRates;
  }

  async function find() {
    const foundRates = await db('equity')
    return foundRates;
  }

  async function update(rates) {
    const updatedRates = await db("equity")
      .where({ isp: rates.isp })
      .update(rates)
      .returning("*")
      // .then((newRates) => newRates[0]);
      return updatedRates
  }