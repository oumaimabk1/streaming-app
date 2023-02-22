import { Request, Response, NextFunction } from "express";
import Session, { SessionDocument } from "../model/session.model";



export const authMiddleware = async (req: any, res: Response, next: NextFunction) => {
  const user = req.session.user;

  //Check if user session exists
  let userSession: SessionDocument | null = await Session.findOne({ user });
  if (!userSession) {
    return res.status(403).json({
      error: 'Not authorized'
    });
  }
  next();
};

  