const db = require("../../data/dbConfig");

module.exports = {
  add,
  find,
  update,
  empty
};

async function find() {
  const foundRates = await db('dollar_funds')
  return foundRates;
}

async function add(dollarRates) {
  const newDolarInfo = await db("dollar_funds")
    .insert(dollarInfo)
    .returning("*");
  return newDolarInfo;
}

async function update(id, rates) {
    const ratesUpdated = await db('dollar_funds')
      .where({ id })
      .update(updatedInfo)
      .returning('*')
      // .then(newInfo => newInfo[0]);
    return ratesUpdated;
  }
  

async function empty() {
    const emptyTable = await db('*')
      .truncate();
    return emptyTable;
  }
