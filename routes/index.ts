import { Router } from "express";
import foodController from "../controllers/food-controller.js";  // Импортируем контроллер

const router: Router = Router();

router.get("/pizza", (req, res, next) => foodController.getAllPizza(req, res, next));
router.get("/pizza/:pizzaId", (req, res, next) => foodController.getOnePizza(req, res, next));
router.get("/desserts", (req, res, next) => foodController.getAllDesserts(req, res, next));
router.get("/desserts/:dessertId", (req, res, next) => foodController.getOneDessert(req, res, next));


export default router;
