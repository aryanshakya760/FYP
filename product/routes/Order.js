const express = require("express");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sequelize } = require("../models");
const router = express.Router();
const { Order } = require("../models");
const { Product } = require("../models");

router.get("/", async (req, res) => {
  showEvents = await Order.findAll();
  res.json(showEvents);
});

router.get("/myOrders", validateToken, async (req, res) => {
  const { id } = req.user;
  orderShow = await Order.findAll({ where: { UserId: id } });
  res.json(orderShow);
});
router.route("/").post(async (req, res) => {
  // using sequelize to post data
  // accessing data
  // body has data in json
  const message = req.body;
  console.log(message);
// });

  const checkOrder = await Order.findOne({
    where: { ProductId: message.ProductId, UserId: message.UserId },
  });

  const checkProductOrder = await Order.findOne({
    where: {
      ProductId: message.ProductId,
    },
  });

  // if (!checkOrder) {
  //   if (!checkProductOrder) {
  //     const seats = Order.create(message);
  //     res.json(seats);
  //   } else {

  //     res.json(
  //       `Movie Ticket Booked with ${checkProductOrder.product_name}, try choosing another seat or show or movie!`
  //     );
  //   }
  // } else {
  //   res.json("Seat booked already");
  // }
});
module.exports = router;
