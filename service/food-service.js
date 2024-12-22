const ApiError = require("../exceptions/api-error");
const pizza = require("../foodData/pizza");
const desserts = require("../foodData/desserts");

class FoodService {
  async getAllPizza() {
    return pizza;
  }

  async getOnePizza(pizzaId) {
    const currentPizza = pizza.find(
      (onePizza) => onePizza.id === Number(pizzaId)
    );
    if (!currentPizza) {
      throw ApiError.NotFound("This pizza is not exists");
    }

    return currentPizza;
  }

  async getAllDesserts() {
    return desserts;
  }

  async getOneDessert(dessertId) {
    const currentDessert = desserts.find(
        (dessert) => dessert.id === Number(dessertId)
    );
    if (!currentDessert) {
      throw ApiError.NotFound("This dessert is not exists");
    }

    return currentDessert;
  }
}

module.exports = new FoodService();
