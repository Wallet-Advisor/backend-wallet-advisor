const db = require("../../data/dbConfig");

module.exports = {
  add,
  find,
  update,
};

async function find() {
  const foundRates = await db('dollar_funds')
  return foundRates;
}

async function add(dollarRates) {
  const newDolarInfo = await db("dollar_funds")
    .insert(dollarRates)
    // .returning("*");
  return newDolarInfo;
}

async function update(rates) {
  const updatedRates = await db("dollar_funds")
    .where({ isp: rates.isp })
    .update(rates)
    .returning("*")
    // .then((newRates) => newRates[0]);
    return updatedRates
}



