import { Request, Response, NextFunction } from "express";
import foodService from "../service/food-service.js";

const foodController = {
  async getAllPizza(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const pizza = await foodService.getAllPizza();
      res.json(pizza);
    } catch (e) {
      next(e);
    }
  },
  async getOnePizza(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { pizzaId } = req.params;
      const currentPizza = await foodService.getOnePizza(pizzaId);
      res.json(currentPizza);
    } catch (e) {
      next(e);
    }
  },
  async getAllDesserts(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const desserts = await foodService.getAllDesserts();
      res.json(desserts);
    } catch (e) {
      next(e);
    }
  },
  async getOneDessert(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { dessertId } = req.params;
      const currentDessert = await foodService.getOneDessert(dessertId);
      res.json(currentDessert);
    } catch (e) {
      next(e);
    }
  },

  async getAllDrinks(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const drinks = await foodService.getAllDrinks();
      res.json(drinks);
    } catch (e) {
      next(e);
    }
  },
  async getOneDrink(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { drinkId } = req.params;
      const currentDrink = await foodService.getOneDrink(drinkId);
      res.json(currentDrink);
    } catch (e) {
      next(e);
    }
  },
};

export default foodController;
