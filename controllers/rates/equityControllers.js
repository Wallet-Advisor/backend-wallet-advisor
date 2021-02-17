const db = require("../../models/ratesModel/equityModel");
const requestHandler = require("../../utils/requestHandler");

module.exports = {
  handleEquityRatesGet,
};

async function handleEquityRatesGet(req, res) {
  try {
    const rateDetails = await db.find();
    return requestHandler.success(
      res,
      200,
      "rates retrieved Successfully",
      rateDetails
    );
  } catch (error) {
    return requestHandler.error(res, 500, `server error ${error.message}`);
  }
}
