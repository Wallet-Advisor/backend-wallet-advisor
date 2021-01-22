const db = require("../data/dbConfig");

module.exports = {
    getMailList,
    saveToMailList
  };
  

async function getMailList() {
  const mailList = await db("subscription").returning("*");
  return mailList;
}

async function saveToMailList(email) {
  const newEmail = await db("subscription")
    .insert(email)
    .returning("*");
  return newEmail;
}
