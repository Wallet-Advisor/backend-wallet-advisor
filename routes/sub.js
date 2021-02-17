/* eslint-disable no-use-before-define */
const { Router } = require("express");

const {
  handleSubscriptionGet,
  handleSubscriptionPost,
} = require("../controllers/subController");

const router = Router();

router.get("/subscription", handleSubscriptionGet);
router.post("/subscription", handleSubscriptionPost);


module.exports = router;