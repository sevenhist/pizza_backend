import DessertModel from "../types/DesertModel";
import PizzaModel from "../types/PizzaModel";
import ApiError from "../exceptions/api-error.js";
import pizza from "../foodData/pizza.js";
import desserts from "../foodData/desserts.js";

class FoodService {
  async getAllPizza(): Promise<PizzaModel[]> {
    return pizza as PizzaModel[];
  }

  async getOnePizza(pizzaId: string): Promise<PizzaModel> {
    const currentPizza = pizza.find(
      (onePizza: PizzaModel) => onePizza.id === Number(pizzaId)
    );
    if (!currentPizza) {
      throw ApiError.NotFound("This pizza does not exist");
    }
    return currentPizza;
  }

  async getAllDesserts(): Promise<DessertModel[]> {
    return desserts as DessertModel[];
  }

  async getOneDessert(dessertId: string): Promise<DessertModel> {
    const currentDessert = desserts.find(
      (dessert: DessertModel) => dessert.id === Number(dessertId)
    );
    if (!currentDessert) {
      throw ApiError.NotFound("This dessert does not exist");
    }
    return currentDessert;
  }
}

export default new FoodService();  // Standardexport
