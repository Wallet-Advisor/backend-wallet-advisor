const db = require('../data/dbConfig');

module.exports = {
    findById,
    findByRiskScore
};

async function findByRiskScore(score){
    const riskScore = await db('risk_categories')
    .select("id, category")
    .where({ score });
    return riskScore;
}

async function findById(id) {
    const categoryid = await db('assets_category')
    .where({ category_id: id });
    return categoryid;
}


