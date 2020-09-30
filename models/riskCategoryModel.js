const db = require("../data/dbConfig");

module.exports = {
  findByCategoryId,
  findByRiskCategory,
  findInfoByUserId,
  findUserId,
  add,
};

async function findByRiskCategory(score) {
  const riskCategory = await db("risk_categories")
    .select("id", "category")
    .where({ score });
  return riskCategory;
}

async function findByCategoryId(id) {
  const categoryid = await db("assets_category").where({ category_id: id });
  return categoryid;
}

async function findInfoByUserId(id) {
  const userId = await db("user_risk_category")
  .select("user_id", "risk_score", "risk_category", )
    .where({ user_id: id })
    .first();
  return userId;
}
async function findUserId(userId) {
  const foundId = await db("users").where({ id: userId });
  return foundId;
}

async function add(userInfo) {
  const newUserInfo = await db("user_risk_category")
    .insert(userInfo)
    .returning("id");
  return newUserInfo;
}
