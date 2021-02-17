const { Router } = require("express");
const { handleRatesPost } = require("../controllers/rates/rateControllers");
const { handleDollarRatesGet } = require("../controllers/rates/dollarControllers");
const { handleEquityRatesGet } = require("../controllers/rates/equityControllers");
const { handleEthicalRatesGet } = require("../controllers/rates/ethicalControllers");
const { handleExchangeRatesGet } = require("../controllers/rates/exchangeControllers");
const { handleFixedIncomeRatesGet } = require("../controllers/rates/fixedIncomeControllers");
const { handleMoneyMarketRatesGet } = require("../controllers/rates/moneyMarketControllers");
const { handleShariahRatesGet } = require("../controllers/rates/shariahControllers");
const { handleSukukRatesGet } = require("../controllers/rates/sukukControllers");

const authenticate = require("../api/auth/authenticate");

const router = Router();

router.post("/rates-category", authenticate, handleRatesPost);
router.get("/dollar", authenticate, handleDollarRatesGet);
router.get("/equity", authenticate, handleEquityRatesGet);
router.get("/ethical", authenticate, handleEthicalRatesGet);
router.get("/exchange", authenticate, handleExchangeRatesGet);
router.get("/fixed-income", authenticate, handleFixedIncomeRatesGet);
router.get("/money-market", authenticate, handleMoneyMarketRatesGet);
router.get("/shariah", authenticate, handleShariahRatesGet);
router.get("/sukuk", authenticate, handleSukukRatesGet);

module.exports = router;
