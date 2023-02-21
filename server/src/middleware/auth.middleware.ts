import { Request, Response, NextFunction } from "express";
import Session, { SessionDocument } from "../model/session.model";



export const authMiddleware = async (req: any, res: Response, next: NextFunction) => {
  const user = req.session.user;
  console.log(req.session)
  //Check if user session exists
  let userSession: SessionDocument | null = await Session.findOne({ user });
  if (!userSession) {
    return res.status(403).json({
      error: 'Not authorized'
    });
  }
  next();
};

/////////////////////////////
/*
import jwt from 'jsonwebtoken';
import config from 'config';

export function authenticate(req: any, res: any, next: any) {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(403).send("Access denied. No token provided");
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(403).send("Invalid token.");
  }
}*/
///////////////////////
  