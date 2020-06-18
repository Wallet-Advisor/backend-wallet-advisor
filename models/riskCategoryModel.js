const db = require('../data/dbConfig');

module.exports = {
    findByCategoryId,
    findByRiskCategory
};

async function findByRiskCategory(score){
    const riskCategory = await db('risk_categories')
    .select("id", "category")
    .where({ score });
    return riskCategory;
}

async function findByCategoryId(id) {
    const categoryid = await db('assets_category')
    .where({ category_id: id });
    return categoryid;
}


