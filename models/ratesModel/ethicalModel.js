const db = require("../../data/dbConfig");

module.exports = {
    add,
    find,
    update
  };

  
async function add(rates) {
    const newRates = await db("ethical")
      .insert(rates)
      // .returning("*");
    return newRates;
  }

  async function find() {
    const foundRates = await db('ethical')
    return foundRates;
  }

  async function update(rates) {
    const updatedRates = await db("ethical")
      .where({ isp: rates.isp })
      .update(rates)
      .returning("*")
      // .then((newRates) => newRates[0]);
      return updatedRates
  }