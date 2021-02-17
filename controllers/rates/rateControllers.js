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

  const existingDollarRates = await dollarDb.find();
  const existingRates = await moneyDb.find();
  const existingFixedIncomeRates = await fixedDb.find();
  const existingEquityRates = await equityDb.find();
  const existingExchgangeRate = await exchangeDb.find();
  const existingShariahRates = await shariahDb.find();
  const existingEthialRates = await ethicalDb.find();
  const existingSukuRates = await sukukDb.find();
  

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
      // if (existingDollarRates != null && existingDollarRates != undefined) {
      //   existingDollarRates.map(async (rate) => {
      //     if (rate.isp === rates.isp) {
      //       await dollarDb.update(details);
      //     } else {
            await dollarDb.add(details);
      //     }
      //   });
      // }
    });

    newMoneyMarket.map(async (rates) => {
      // if (existingRates != null && existingRates != undefined) {
      //   existingRates.map(async (rate) => {
      //     if (rate.isp === rates.isp) {
      //       await moneyDb.update({
      //         isp: rates.isp,
      //         minimum: rates.minimum,
      //         current: rates.current,
      //         management: rates.management,
      //       });
      //     } else {
            await moneyDb.add({
              isp: rates.isp,
              minimum: rates.minimum,
              current: rates.current,
              management: rates.management,
            });
      //     }
      //   });
      // }
    });

    newFixedIncome.map(async (rates) => {
      // if (
      //   existingFixedIncomeRates != null &&
      //   existingFixedIncomeRates != undefined
      // ) {
      //   existingFixedIncomeRates.map(async (rate) => {
      //     if (rate.isp === rates.isp) {
      //       await fixedDb.update({
      //         isp: rates.isp,
      //         minimum: rates.minimum,
      //         year: rates.year,
      //         management: rates.management,
      //       });
      //     } else {
            await fixedDb.add({
              isp: rates.isp,
              minimum: rates.minimum,
              year: rates.year,
              management: rates.management,
            });
      //     }
      //   });
      // }
    });

    newEquityRates.map(async (rates) => {
      // if (existingEquityRates != null && existingEquityRates != undefined) {
      //   existingEquityRates.map(async (rate) => {
      //     if (rate.isp === rates.isp) {
      //       await equityDb.update({
      //         isp: rates.isp,
      //         minimum: rates.minimum,
      //         year: rates.year,
      //         management: rates.management,
      //       });
      //     } else {
            await equityDb.add({
              isp: rates.isp,
              minimum: rates.minimum,
              year: rates.year,
              management: rates.management,
            });
      //     }
      //   });
      // }
    });

    newExchangeRates.map(async (rates) => {

      // if (existingExchgangeRate != null && existingExchgangeRate != undefined) {
      //   existingExchgangeRate.map(async (rate) => {
      //     if (rate.isp === rates.isp) {
      //       await exchangeDb.update({
      //         isp: rates.isp,
      //         minimum: rates.minimum,
      //         year: rates.year,
      //       });
      //     } else {
            await exchangeDb.add({
              isp: rates.isp,
              minimum: rates.minimum,
              year: rates.year,
            });
      //     }
      //   });
      // }
    });

    newShariahRates.map(async (rates) => {

      // if (existingShariahRates != null && existingShariahRates != undefined) {
      //   existingShariahRates.map(async (rate) => {
      //     if (rate.isp === rates.isp) {
      //       await shariahDb.update({
      //         isp: rates.isp,
      //         year: rates.year,
      //         management: rates.management,
      //       });
      //     } else {
            await shariahDb.add({
              isp: rates.isp,
              year: rates.year,
              management: rates.management,
            });
      //     }
      //   });
      // }
    });

    newEthicalRates.map(async (rates) => {
     
      // if (existingEthialRates != null && existingEthialRates != undefined) {
      //   existingEthialRates.map(async (rate) => {
      //     if (rate.isp === rates.isp) {
      //       await ethicalDb.update({
      //         isp: rates.isp,
      //         year: rates.year,
      //         management: rates.management,
      //       });
      //     } else {
            await ethicalDb.add({
              isp: rates.isp,
              year: rates.year,
              management: rates.management,
            });
      //     }
      //   });
      // }
    });

    newSukukRates.map(async (rates) => {

      // if (existingSukuRates != null && existingSukuRates != undefined) {
      //   existingSukuRates.map(async (rate) => {
      //     if (rate.isp === rates.isp) {
      //       await sukukDb.update({
      //         isp: rates.isp,
      //         2024: rates["2024"],
      //         2025: rates["2025"],
      //         2020: rates["2020"],
      //       });
      //     } else {
            sukukDb.add({
              isp: rates.isp,
              2024: rates["2024"],
              2025: rates["2025"],
              2020: rates["2020"],
            });
      //     }
      //   });
      // }
    });

    return requestHandler.success(res, 200, "Rates are stored successfully!");
  } catch (error) {
    return requestHandler.error(res, 500, `server error ${error.message}`);
  }
}
