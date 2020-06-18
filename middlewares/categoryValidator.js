const requestHandler = require("../utils/requestHandler");
const categoriesModel = require("../models/riskCategoryModel");
const checkItem = require("../utils/checkInputs");
require("dotenv").config();

/**
 * Validates all routes
 * @class CategoryValidator
 */
module.exports = class CategoryValidator {
  /**
   * Validates all event details
   * @param {obj} req
   * @param {obj} res
   * @param {obj} next
   * @returns {obj} Validation error messages or contents of req.body
   */
  static async validateID(req, res, next) {
    // validates provided ID is a number
    const { id } = req.body;
    const check = checkItem({ id });

    if (Object.keys(check).length > 0) {
      return requestHandler.error(res, 400, check);
    }
    categoriesModel
      .findByCategoryId(id)
      .then((data) => {
        if (data.length === 0) {
          return requestHandler.error(
            res,
            404,
            "This asset category id cannot be found,please provide a valid asset category id"
          );
        }
        req.event = data;
        return next();
      })
      .catch((error) => {
        return requestHandler.error(res, 500, `Server error ${error}`);
      });
  }

  static async categoryScoreValidation(req, res, next) {
    try {
      const { score } = req.body;
      const check = checkItem({
        score
      });
      if (Object.keys(check).length > 0 || typeof(score) === "string" ) {
        return requestHandler.error(
          res,
          400,
          `JSON cannot be empty and score value must be a number`
        );
      } 
      return next();
    } catch (error) {
      return requestHandler.error(res, 500, `Server error ${error}`);
    }
  }
};
