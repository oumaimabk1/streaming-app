import express from "express";
import { body } from "express-validator";

import userController from "../controllers/user.controller.js";
import requestHandler from "../handlers/request.handler.js";
import userModel from "../models/user.model.js";
import tokenMiddleware from "../middlewares/token.middleware.js";

const router = express.Router();

router.post(
    "/signup",
    body("name")
      .exists().withMessage("name is required")
      .isLength({ min: 8 }).withMessage("name minimum 8 characters"),
    body("email")
      .exists().withMessage("email is required")
      .isEmail().withMessage("invalid email address")
      .custom(async value => {
        const user = await userModel.findOne({ email: value });
        if (user) return Promise.reject("email already used");
      }),
    body("password")
      .exists().withMessage("password is required")
      .isLength({ min: 8 }).withMessage("password minimum 8 characters"),
    body("confirmPassword")
      .exists().withMessage("confirmPassword is required")
      .isLength({ min: 8 }).withMessage("confirmPassword minimum 8 characters")
      .custom((value, { req }) => {
        if (value !== req.body.password) throw new Error("confirmPassword not match");
        return true;
      }),
    body("address")
      .exists().withMessage("address is required"),
    body("city")
      .exists().withMessage("city is required"),
    body("state")
      .exists().withMessage("state is required"),
    body("zip")
      .exists().withMessage("zip is required"),
    body("cardName")
      .exists().withMessage("cardName is required"),
    body("cardNumber")
      .exists().withMessage("cardNumber is required"),
    body("expiry")
      .exists().withMessage("expiry is required"),
    body("cvv")
      .exists().withMessage("cvv is required"),
    requestHandler.validate,
    userController.signup
  );

router.post(
  "/signin",
  body("email")
    .exists().withMessage("email is required"),
  body("password")
    .exists().withMessage("password is required")
    .isLength({ min: 8 }).withMessage("password minimum 8 characters"),
  requestHandler.validate,
  userController.signin
);

router.put(
  "/update-password",
  tokenMiddleware.auth,
  body("password")
    .exists().withMessage("password is required")
    .isLength({ min: 8 }).withMessage("password minimum 8 characters"),
  body("newPassword")
    .exists().withMessage("newPassword is required")
    .isLength({ min: 8 }).withMessage("newPassword minimum 8 characters"),
  body("confirmNewPassword")
    .exists().withMessage("confirmNewPassword is required")
    .isLength({ min: 8 }).withMessage("confirmNewPassword minimum 8 characters")
    .custom((value, { req }) => {
      if (value !== req.body.newPassword) throw new Error("confirmNewPassword not match");
      return true;
    }),
  requestHandler.validate,
  userController.updatePassword
);

router.get(
  "/info",
  tokenMiddleware.auth,
  userController.getInfo
);


export default router;