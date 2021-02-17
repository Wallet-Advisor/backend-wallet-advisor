const db = require("../../data/dbConfig");

module.exports = {
  add,
  find,
  update,
};

async function add(rates) {
  const newRates = await db("money_market")
    .insert(rates)
    .returning("*");
  return newRates;
}

async function find() {
  const foundRates = await db("money_market");
  return foundRates;
}

async function update(rates) {
  const updatedRates = await db("money_market")
    .where({ isp: rates.isp })
    .update(rates)
    .returning("*")
    // .then((newRates) => newRates[0]);
    return updatedRates
}
