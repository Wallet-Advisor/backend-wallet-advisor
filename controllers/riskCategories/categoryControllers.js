const db = require("../../models/riskCategoryModel");
const requestHandler = require('../../utils/requestHandler');

module.exports = {
  handleCategoriesGet,
  handleAssetsCategories,
};

async function handleCategoriesGet(req, res) {
  let { score } = req.body;
  try {

    if (score >= 16 && score < 38) {
      score = 16;
    } else if (score >= 38 && score < 60) {
      score = 38;
    } else if (score >= 60 && score < 81) {
      score = 60;
    } else if (score >= 81 && score < 103) {
      score = 81;
    } else if (score >= 103 && score < 126) {
      score = 103;
    }
    const riskCategory = await db.findByRiskCategory(score);
    return requestHandler.success(
      res,
      200,
      'All Investments retrieved Successfully',
      riskCategory
    );
  } catch(error){
    return requestHandler.error(res, 500, `server error ${error.message}`);
  }
}


async function handleAssetsCategories (req, res) {
  let { id } = req.body;
  try {
    const assetCategory = await db.findByCategoryId(id);
    return requestHandler.success(
      res,
      200,
      'All assets categories retrieved Successfully',
      assetCategory
    );
  } catch(error){
    return requestHandler.error(res, 500, `server error ${error.message}`);
  }

}