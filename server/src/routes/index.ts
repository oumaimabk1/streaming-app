import { Express, Request, Response } from "express";
import { createUserHandler, resetPassword, updatePassword, Verifytoken } from "../controller/user.controller";
import { createUserSessionHandler, invalidateUserSessionHandler, getUserSessionsHandler } from "../controller/session.controller";
import { validateRequest, requiresUser, authenticate } from "../middleware";
import { createUserSchema, createUserSessionSchema } from "../shema/user.shema";
import axios from "axios";
import Movies from "../model/movie.model";
import { getAllMovies, getOneMovie } from "../controller/movies.controller";
import { getAllGenres, getGenresByIds } from "../controller/genre.controller";
import { addFavorite, getFavoritesByUser, removeFavorite } from "../controller/favorite.controller";
import { addRating, getRatingsByUser, getMovieRating } from "../controller/rating.controller";
import { searchMovies } from "../controller/search.controller";
import { filtreAndSearch } from "../controller/filtreAndSearch.controller";
import TVShows from "../model/TVShows.model";
import { getAllTVShows, getOneTVShow } from "../controller/TVShows.controller";
import { filtreAndSearchTVShows } from "../controller/filterAndSearchTVShows.controller";
import { getAllTVShowsGenres, getGenresTVShowsByIds } from "../controller/genreTVShow.controller";

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

  //reset password
  app.post("/api/reset-password", resetPassword);

  app.get("/api/reset-password/:token", Verifytoken);

  app.post("/api/reset-password/:token", updatePassword);

  //movie
  app.get("api/video", () => {
    for (let page = 1; page <= 5000; page++) {
      console.log(page)
      axios.get('https://api.themoviedb.org/3/discover/movie', { params: { api_key: '6cc1df6659017d51dec12febc2690279', page: page } })
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

  //get one movie
  app.get("/api/getOneMovie/:id", getOneMovie);

  //get all genres
  app.get("/api/getAllGenres", getAllGenres);

  //get genres by Ids
  app.get("/api/getGenresByIds", getGenresByIds);

    //Search movies
    app.get("/api/searchMovies", searchMovies);
    app.get("/api/filtreAndSearch",  filtreAndSearch);

  
  //TVShows
    app.get("api/tvShows", () => {
      for (let page = 1; page <= 5; page+=5) {
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
      }
    })

   //get all tvShows
   app.get("/api/getAllTVShows", getAllTVShows);

  //get one TVShow
  app.get("/api/getOneMovie/:id", getOneTVShow);

  //get all genres TVShows
  app.get("/api/getAllTVShowsGenres", getAllTVShowsGenres);

  //get genres TVShows by Ids
  app.get("/api/getGenresTVShowsByIds", getGenresTVShowsByIds);

  //Search TVShows
  app.get("/api/filtreAndSearchTVShows",  filtreAndSearchTVShows);


  // Add a movie to favorites
  app.post("/api/favorites",authenticate, addFavorite);

  // Get favorites by user id
  app.get("/api/favorites/:userId", authenticate, getFavoritesByUser);

  // Remove a movie from favorites
  app.delete("/api/favorites", authenticate, removeFavorite);

  // Add a movie rating
  app.post("/api/ratings", authenticate, addRating);

  // Get ratings bu user
  app.get("/api/ratings/:userId", authenticate, getRatingsByUser);

  // Get ratings for a movie
  app.get("/api/ratings/:movieId",authenticate, getMovieRating);

  //Search
  app.get("/api/searchMovies", searchMovies);
  app.get("/api/filtreAndSearch",  filtreAndSearch);




}
