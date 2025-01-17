import { Router, Request, Response, NextFunction } from "express";
import foodController from "../controllers/food-controller.js"; // Import the controller

const router: Router = Router();

// Define route handlers with proper type annotations
router.get(
  "/pizza",
  (req: Request, res: Response, next: NextFunction) => foodController.getAllPizza(req, res, next)
);

router.get(
  "/pizza/:pizzaId",
  (req: Request<{ pizzaId: string }>, res: Response, next: NextFunction) =>
    foodController.getOnePizza(req, res, next)
);

router.get(
  "/desserts",
  (req: Request, res: Response, next: NextFunction) => foodController.getAllDesserts(req, res, next)
);

router.get(
  "/desserts/:dessertId",
  (req: Request<{ dessertId: string }>, res: Response, next: NextFunction) =>
    foodController.getOneDessert(req, res, next)
);

router.get(
  "/drinks/:drinkId",
  (req: Request<{ drinkId: string }>, res: Response, next: NextFunction) =>
    foodController.getOneDrink(req, res, next)
);

router.get(
  "/drinks",
  (req: Request, res: Response, next: NextFunction) => foodController.getAllDrinks(req, res, next)
);

export default router;
