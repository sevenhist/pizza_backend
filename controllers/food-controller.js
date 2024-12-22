const foodService = require("../service/food-service")

class FoodController {
    async getAllPizza(req, res, next) {
        try {
            const pizza = await foodService.getAllPizza()
            return res.json(pizza)
        } catch(e) {
            next(e);
        }   
    }
    async getOnePizza(req, res, next) {
        try {
            const { pizzaId } = req.params
            const currentPizza = await foodService.getOnePizza(pizzaId)
            return res.json(currentPizza)
        } catch(e) {
            next(e);
        }   
    }
    async getAllDesserts(req, res, next) {
        try {
            const desserts = await foodService.getAllDesserts()
            return res.json(desserts)
        } catch (e) {
            next(e)
        }
    }
    async getOneDessert(req, res, next) {
        try {
            const { dessertId } = req.params
            const currentDessert = await foodService.getOneDessert(dessertId)
            return res.json(currentDessert)
        } catch(e) {
            next(e)
        }
    }
}

module.exports = new FoodController