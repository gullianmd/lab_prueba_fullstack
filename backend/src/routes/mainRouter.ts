import express from "express";
import { header, param } from "express-validator"
import { chainCheck } from "../middlewares/validationMiddleware";
import * as loginController from "../controllers/loginController";
import * as setController from "../controllers/setController";
import * as cardController from "../controllers/cardController"

export const mainRouter = express()

mainRouter.post("/login", 
  [
    header("Authorization").notEmpty(),
    chainCheck
  ],
  loginController.login
)

mainRouter.get('/sets',
  loginController.authenticateJWT,
  setController.getAllSet
)
mainRouter.get('/sets/:id/cards',
  loginController.authenticateJWT,
  [
    param("id").notEmpty(),
    chainCheck
  ],
  setController.getCardsFromSet
)

mainRouter.get('/cards/:id',
  loginController.authenticateJWT,
  [
    param("id").notEmpty(),
    chainCheck
  ],
  cardController.getCardDetail
)