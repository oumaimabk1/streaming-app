
import { Express, Request, Response } from "express";
import validate from "../middleware/validateRequest";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));
}



//app.post(“/api/users”, validateRequest(createUserSchema), createUserHandler);