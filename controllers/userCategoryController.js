const db = require("../models/riskCategoryModel");
const requestHandler = require("../utils/requestHandler");

module.exports = {
  handleUserRiskCategoriesGet,
  handleUserRiskCategoriesPost,
  handleUserCategoryDelete,
  handleUserRiskCategoriesEdit
};



async function handleUserRiskCategoriesGet(req, res) {
  const { userId } = await req.decodedToken;
  if(userId){
    try {
      const userCategoryDetails = await db.findInfoByUserId(userId);
      if(userCategoryDetails[0].risk_category){
          const categoryValue = await db.findCategory(userCategoryDetails[0].risk_category);
          const userAssets = await db.findByCategoryId(userCategoryDetails[0].risk_category);
          userCategoryDetails[0].asset_category = userAssets;
          userCategoryDetails[0].risk_category = categoryValue;
      }
      return requestHandler.success(
        res,
        200,
        "User Category details retrieved Successfully",
        userCategoryDetails 
      );
    } catch (error) {
      return requestHandler.error(res, 500, `user does not have a defined risk category`);
    }
  }
}

async function handleUserRiskCategoriesPost(req, res) {
    const { userId } = await req.decodedToken;
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
        { id: Number(data.toString()) }
      );
    })
    .catch(error => {
      return requestHandler.error(res, 500, `server error ${error.message}`);
    });
  }

  async function handleUserRiskCategoriesEdit(req, res) {
    const { userId } = await req.decodedToken;
    const EditUserInfo = { 
        risk_score: req.body.score,
        risk_category: req.body.category,
        user_id: userId
    };
    db.update(userId, EditUserInfo)
    .then(data => {
      return requestHandler.success(
        res,
        201,
        'User Information was stored successfully!',
        { userInfo: data }
      );
    })
    .catch(error => {
      return requestHandler.error(res, 500, `server error ${error.message}`);
    });
  }

  async function handleUserCategoryDelete(req, res) {
    const { userId } = await req.decodedToken;
    db.remove(userId)
      .then(() => {
        return requestHandler.success(
          res,
          200,
          'your user category has been deleted successfully!'
        );
      })
      .catch(error => {
        return requestHandler.error(res, 500, `server error ${error.message}`);
      });
  }