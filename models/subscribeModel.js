const db = require("../data/dbConfig");


async function getMailList() {
  const mailList = await db("sub").returning("*");
  return mailList;
}

const saveToMailList = async (details) => {
  const newDetails = await db("sub")
  .insert({ address: details})
  .returning("*")
  .then((data) => data[0]);
  return newDetails;
};


module.exports = {
    getMailList,
    saveToMailList
  };
  