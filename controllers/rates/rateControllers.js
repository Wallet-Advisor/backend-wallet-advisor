const dollarDb = require("../../models/ratesModel/dollarModel");
const moneyDb = require("../../models/ratesModel/moneyMarketModel");
const fixedDb = require("../../models/ratesModel/fixedIncomeModel");
const equityDb = require("../../models/ratesModel/equityModel");
const ethicalDb = require("../../models/ratesModel/ethicalModel");
const exchangeDb = require("../../models/ratesModel/exchangeModel");
const shariahDb = require("../../models/ratesModel/shariahModel");
const sukukDb = require("../../models/ratesModel/sukukModel");
const requestHandler = require("../../utils/requestHandler");

module.exports = {
  handleRatesPost,
};


async function handleRatesPost(req, res) {
  //   const { userId } = await req.decodedToken;
  const dollarRates = {
    isp: req.body.isp,
    minimum: req.body.minimum,
    current: req.body.current,
    thirty: req.body.thirty,
    ninety: req.body.ninety,
    one: req.body.one,
  };
  const moneyMarketRates = {
    isp: req.body.isp,
    minimum: req.body.minimum,
    current: req.body.current,
    management: req.body.management
  }
  const fixedIncomeRates = {
    isp: req.body.isp,
    minimum: req.body.minimum,
    year: req.body.year,
    management: req.body.management
  }
  const equityRates = {
    isp: req.body.isp,
    minimum: req.body.minimum,
    year: req.body.year,
    management: req.body.management
  }
  const exchangeRates = {
    isp: req.body.isp,
    minimum: req.body.minimum,
    year: req.body.year,
    management: req.body.management
  }
  const shariahRates = {
    isp: req.body.isp,
    year: req.body.year,
    management: req.body.management
  }
  const ethicalRates = {
    isp: req.body.isp,
    year: req.body.year,
    management: req.body.management
  }
  const sukukRates = {
    isp: req.body.isp,
    minimum: req.body.minimum,
    year: req.body.year,
    management: req.body.management
  }
  

  try {
    const addedDollarRates = await dollarDb.add(dollarRates);
    const addMoneyMarket = await moneyDb.add(moneyMarketRates);
    const addedEthicalRates = await ethicalDb.add(ethicalRates);
    const addedFixedIncomeRates = await fixedDb.add(fixedIncomeRates);
    const addedEquityRates = await equityDb.add(equityRates);
    const addedExchangeRates = await exchangeDb.add(exchangeRates);
    const addedShariahRates = await shariahDb.add(shariahRates);
    const addedSukukRates = await sukukDb.add(sukukRates);
    return requestHandler.success(
      res,
      200,
      "Rates are stored successfully!",
      addedDollarRates, addMoneyMarket, addedFixedIncomeRates,
      addedEquityRates, addedExchangeRates, addedSukukRates,
      addedShariahRates, addedEthicalRates
    );
  } catch (error) {
    return requestHandler.error(res, 500, `server error ${error.message}`);
  }
}
