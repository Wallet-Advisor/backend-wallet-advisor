const db = require("../models/subscribeModel");
const requestHandler = require("../utils/requestHandler");

module.exports = {
  handleSubscriptionGet,
  handleSubscriptionPost,
};

async function handleSubscriptionGet(req, res) {
  try {
    const subDetails = await db.getMailList();
    return requestHandler.success(
      res,
      200,
      "Newsletter subscriptions fetched successfully",
      subDetails
    );
  } catch (error) {
    return requestHandler.error(res, 500, "subscription not successful");
  };
};


const handleSubscriptionPost = (req, res) => {
    const { email } = req.body;
    db.saveToMailList(email).then(data => {
        return requestHandler.success(
            res,
            200,
            "You have successfully subscribed to our newsletter",
            data
        )
    }).catch(error){
        
    }
}