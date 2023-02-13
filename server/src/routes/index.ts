import { Express, Request, Response } from "express";

import { createUserHandler } from "../controller/user.controller";
import {
  createUserSessionHandler,
  invalidateUserSessionHandler,
  getUserSessionsHandler,
} from "../controller/session.controller";
import { validateRequest, requiresUser } from "../middleware";
import { createUserSchema, createUserSessionSchema } from "../shema/user.shema";


export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  
  // Register user
  app.post("/api/users", validateRequest(createUserSchema), createUserHandler);

  // Login
  app.post(
    "/api/sessions",
    validateRequest(createUserSessionSchema),
    createUserSessionHandler
  );

  // Get the user's sessions
  app.get("/api/sessions", requiresUser, getUserSessionsHandler);

  // Logout
  app.delete("/api/sessions", requiresUser, invalidateUserSessionHandler);
}