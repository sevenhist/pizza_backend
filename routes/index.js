const Router = require("express").Router;
const foodController = require("../controllers/food-controller")
const router = new Router()

router.get("/pizza", foodController.getAllPizza)
router.get("/pizza/:pizzaId", foodController.getOnePizza)
router.get("/desserts", foodController.getAllDesserts)
router.get("/desserts/:dessertId", foodController.getOneDessert)

module.exports = router