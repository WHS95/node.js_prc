const express = require("express");
const Goods = require("../controller/goods");
const GoodsController = new Goods();

const router = express.Router();

router
  .route("/")
  .get(GoodsController.getGoods)
  .put(GoodsController.putGoods)
  .post(GoodsController.postGoods)
  .delete(GoodsController.deleteGoods);



module.exports = router;

// {
//   "goodsId": 2,
//   "name": "시원한 사이다",
//   "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7JqMw7ZYZP4ZW136wcoMTmLzbrMIJzUWb1Dhu9cHwCPp0gA&usqp=CAc",
//   "category": "drink",
//   "price": 3000
// }