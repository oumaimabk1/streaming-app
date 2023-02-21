import config from "config";
import { get } from "lodash";
import { Request, Response } from "express";
import { validatePassword } from "../service/user.service";
import {
  createSession,
  createAccessToken,
  updateSession,
  findSessions,
} from "../service/session.service";
import { sign } from "../utils/jwt.utils";
import axios from "axios";
import TVShows from "../model/TVShows.model";

export async function createUserSessionHandler(req: Request, res: Response) {
  // validate the email and password
  const user = await validatePassword(req.body);
/*  for (let page = 1001; page <= 2000; page++) {
    console.log(page)
    axios.get('https://api.themoviedb.org/3/discover/tv', { params: { api_key: '6cc1df6659017d51dec12febc2690279', page:page } })
      .then(response => {
        // Connect to the MongoDB cluster
        
          // Insert the data into the collection
          TVShows.insertMany(response.data.results, function (err, result) {
            if (err) throw err;
            console.log(`documents inserted.`);
          });
      })
      .catch(error => {
        console.error(error);
      });
  }*/
  if (!user) {
    return res.status(401).send("Invalid username or password");
  }

  // Create a session
  const session = await createSession(user._id, req.get("user-agent") || "");

  // create access token
  const accessToken = createAccessToken({
    user,
    session,
  });

  // create refresh token
  const refreshToken = sign(session, {
    expiresIn: config.get("refreshTokenTtl"), // 1 year
  });
  
  // send refresh & access token back
  return res.send({ accessToken, refreshToken });
}

export async function invalidateUserSessionHandler(
  req: Request,
  res: Response
) {
  const sessionId = get(req, "user.session");

  await updateSession({ _id: sessionId }, { valid: false });

  return res.sendStatus(200);
}

export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");

  const sessions = await findSessions({ user: userId, valid: true });
  
  return res.send(sessions);
}