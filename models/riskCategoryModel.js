const db = require("../data/dbConfig");

module.exports = {
  findByCategoryId,
  findByRiskCategory,
  add,
  update,
  remove,
  findInfoByUserId,
  findCategory,
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
  const userInfo = await db("user_risk_category")
    .select("risk_score", "risk_category")
    .where({ user_id: id });
  return userInfo;
}

async function findCategory(categoryId) {
  const userCategoryInfo = await db("risk_categories")
    .select("category")
    .where({ id: categoryId });
  return userCategoryInfo;
}

async function add(userDetails) {
  const newUserDetails = await db("user_risk_category")
    .insert(userDetails)
    .returning("*");
  return newUserDetails;
}

async function update(id, userInfo) {
  const userInfoUpdate = await db("user_risk_category")
    .where({ id })
    .update(userInfo)
    .returning("*")
    .then((newInfo) => newInfo[0]);
  return userInfoUpdate;
}

async function remove(id) {
  const userInfoId = await db("user_risk_category")
    .where({ id })
    .delete();
  return userInfoId;
}
