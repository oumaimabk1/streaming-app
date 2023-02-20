import { Express, Request, Response } from "express";

import { createUserHandler } from "../controller/user.controller";
import {
  createUserSessionHandler,
  invalidateUserSessionHandler,
  getUserSessionsHandler,
} from "../controller/session.controller";
import { validateRequest, requiresUser } from "../middleware";
import { createUserSchema, createUserSessionSchema } from "../shema/user.shema";
import axios from "axios";
import Movies from "../model/movie.model";
import { getAllMovies } from "../controller/movies.controller";

import {
  addFavorite,
  getFavoritesByUser,
  removeFavorite,
} from "../controller/favorite.controller";




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

  app.get("api/video", () => {
    for (let page = 1; page <= 5000; page++) {
      console.log(page)
      axios.get('https://api.themoviedb.org/3/discover/movie', { params: { api_key: '6cc1df6659017d51dec12febc2690279', page:page } })
        .then(response => {
          // Connect to the MongoDB cluster
          
            // Insert the data into the collection
            Movies.insertMany(response.data.results, function (err, result) {
              if (err) throw err;
              console.log(`documents inserted.`);
      
            });
         
        })
        .catch(error => {
          console.error(error);
        });
    }
  })

  
  //get all movies
  app.get("/api/getAllMovies", getAllMovies);

  // Add a movie to favorites
app.post("/api/favorites", addFavorite);

// Get favorites by user id
app.get("/api/favorites/:userId", getFavoritesByUser);

// Remove a movie from favorites
app.delete("/api/favorites", removeFavorite);


}
