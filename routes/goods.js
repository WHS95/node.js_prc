const express = require("express");
const Goods = require("../controller/goods");
const GoodsController = new Goods();

const router = express.Router();

router.get(GoodsController.getAllGoods)
router.get("/:id",GoodsController.getGoods)
router.put(GoodsController.putGoods)
router.post(GoodsController.postGoods)
router.delete(GoodsController.deleteGoods);



module.exports = router;

// {
//   "goodsId": 2,
//   "name": "시원한 사이다",
//   "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7JqMw7ZYZP4ZW136wcoMTmLzbrMIJzUWb1Dhu9cHwCPp0gA&usqp=CAc",
//   "category": "drink",
//   "price": 3000
// }