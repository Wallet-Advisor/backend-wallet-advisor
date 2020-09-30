const db = require("../models/riskCategoryModel");
const requestHandler = require("../utils/requestHandler");

module.exports = {
  handleUserRiskCategoriesGet,
  handleUserRiskCategoriesPost
};



async function handleUserRiskCategoriesGet(req, res) {
  const { userId } = await req.decodedToken;
  if(userId){
    try {
      const userCategoryDetails = await db.findInfoByUserId(userId);
      return requestHandler.success(
        res,
        200,
        "User Category details retrieved Successfully",
        userCategoryDetails
      );
    } catch (error) {
      return requestHandler.error(res, 500, `server error ${error.message}`);
    }
  }
}

async function handleUserRiskCategoriesPost(req, res) {
    const { userId } = await req.decodedToken;
    // const foundId = await db.findUserId(id)
    const userInfo = { 
        risk_score: req.body.score,
        risk_category: req.body.category,
        user_id: userId
    };
    db.add(userInfo)
    .then(data => {
      return requestHandler.success(
        res,
        201,
        'User Information was stored successfully!',
        { user_id: Number(data.toString()) }
      );
    })
    .catch(error => {
      return requestHandler.error(res, 500, `server error ${error.message}`);
    });
  }
