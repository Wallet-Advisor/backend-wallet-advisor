const db = require("../data/dbConfig");

async function getMailList() {
  const mailList = await db("sub").returning("*");
  return mailList;
}

async function find(email) {
  const found = await db("sub").where({ address: email });
  return found;
}

const saveToMailList = async (details) => {
  let result = await find(details);

  if (result.length !== 0) {
    return result;
  } else {
    const newDetails = await db("sub")
      .insert({ address: details })
      .returning("*")
      .then((data) => data[0]);
    return newDetails;
  }
};

module.exports = {
  getMailList,
  saveToMailList,
  find,
};
