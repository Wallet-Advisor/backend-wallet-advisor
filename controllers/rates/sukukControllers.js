const db = require("../../models/ratesModel/sukukModel");
const requestHandler = require("../../utils/requestHandler");

module.exports = {
  handleSukukRatesGet,
};

async function handleSukukRatesGet(req, res) {
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
