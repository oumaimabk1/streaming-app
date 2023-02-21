/*
import { Request, Response, NextFunction } from "express";
import Session, { SessionDocument } from "../model/session.model";



export const authMiddleware = async (req: any, res: Response, next: NextFunction) => {
  const user = req.session.user;
  //Check if user session exists
  let userSession: SessionDocument | null = await Session.findOne({ user });
  if (!userSession) {
    return res.status(401).json({
      error: 'Not authorized'
    });
  }
  next();
};
*/

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

import jwt from 'jsonwebtoken';
import config from 'config';
import { Request, Response, NextFunction } from 'express';
import { findSessions } from '../service/session.service';

 async function authenticate(req: any, res: Response, next: NextFunction) {

  // Get token from request header
  const token = req.header('x-auth-token');

   // Check that token is provided
  if (!token) {
    return res.status(403).send("Access denied. No token provided");
  }

  try {
     // Verify token
    const decoded: any = jwt.verify(token, config.get('jwtPrivateKey'));
     // Get sessionId from decoded token
    const sessionId = decoded.session;
    // Find session associated with the token
    const session = await findSessions({ _id: sessionId, valid: true });
    // Exit if session is invalid
    if (!session) {
      return res.status(403).send("Invalid token.");
    }
    // Assign user data to request object
    req.user = { ...decoded, session };
    // Call next function
    next();
  } catch (ex) {
    res.status(403).send("Invalid token.");
  }
}

export default authenticate;
