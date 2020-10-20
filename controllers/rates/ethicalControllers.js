const db = require("../../models/ratesModel/ethicalModel");
const requestHandler = require("../../utils/requestHandler");

module.exports = {
  handleEthicalRatesGet,
};

async function handleEthicalRatesGet(req, res) {
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
