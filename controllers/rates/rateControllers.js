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
  const newDollars = req.body.dollar;
  const newMoneyMarket = req.body.money_market;
  const newFixedIncome = req.body.fixed_income;
  const newEquityRates = req.body.equity;
  const newExchangeRates = req.body.exchange;
  const newShariahRates = req.body.shariah;
  const newEthicalRates = req.body.ethical;
  const newSukukRates = req.body.sukuk;

  try {
    newDollars.map(async (rates) => {
      const details = {
        isp: rates.isp,
        minimum: rates.minimum,
        current: rates.current,
        thirty: rates.thirty,
        ninety: rates.ninety,
        one: rates.one,
      };
      const existingDollarRates = await dollarDb.find();
      if (existingDollarRates != null && existingDollarRates != undefined) {
        existingDollarRates.map(async (rate) => {
          if (rate.isp === rates.isp) {
            await dollarDb.update(rates);
          } else {
            const addedDollarRates = await dollarDb.add(details);
            return addedDollarRates;
          }
        });
      }
    });

    newMoneyMarket.map(async (rates) => {
      const existingRates = await moneyDb.find();
      if (existingRates != null && existingRates != undefined) {
        existingRates.map(async (rate) => {
          if (rate.isp === rates.isp) {
            await moneyDb.update(rates);
          } else {
            await moneyDb.add({
              isp: rates.isp,
              minimum: rates.minimum,
              current: rates.current,
              management: rates.management,
            });
          }
        });
      }
    });

    newFixedIncome.map(async (rates) => {
      const existingFixedIncomeRates = await fixedDb.find();
      if (
        existingFixedIncomeRates != null &&
        existingFixedIncomeRates != undefined
      ) {
        existingFixedIncomeRates.map(async (rate) => {
          if (rate.isp === rates.isp) {
            await fixedDb.update(rates);
          } else {
            await fixedDb.add({
              isp: rates.isp,
              minimum: rates.minimum,
              year: rates.year,
              management: rates.management,
            });
          }
        });
      }
    });
    newEquityRates.map(
      async (rates) =>
        await equityDb.add({
          isp: rates.isp,
          minimum: rates.minimum,
          year: rates.year,
          management: rates.management,
        })
    );

    newExchangeRates.map(
      async (rates) =>
        await exchangeDb.add({
          isp: rates.isp,
          minimum: rates.minimum,
          year: rates.year,
          management: rates.management,
        })
    );

    newShariahRates.map(
      async (rates) =>
        await shariahDb.add({
          isp: rates.isp,
          year: rates.year,
          management: rates.management,
        })
    );

    newEthicalRates.map(
      async (rates) =>
        await ethicalDb.add({
          isp: rates.isp,
          year: rates.year,
          management: rates.management,
        })
    );

    newSukukRates.map(
      async (rates) =>
        (addedSukukRates = await sukukDb.add({
          isp: rates.isp,
          2024: rates["2024"],
          2025: rates["2025"],
          2020: rates["2020"],
        }))
    );

    return requestHandler.success(res, 200, "Rates are stored successfully!");
  } catch (error) {
    return requestHandler.error(res, 500, `server error ${error.message}`);
  }
}
