const db = require("../../models/ratesModel/dollarModel");
const requestHandler = require("../../utils/requestHandler");

module.exports = {
  handleDollarRatesGet,
};

async function handleDollarRatesGet(req, res) {
  try {
    const rateDetails = await db.find();
    return requestHandler.success(
      res,
      200,
      "dollar rates retrieved Successfully",
      rateDetails
    );
  } catch (error) {
    return requestHandler.error(res, 500, `server error ${error.message}`);
  }
}
