import { Request, Response } from "express";
import Movies, { MovieDocument } from "../model/movie.model";
import Genres, { GenreDocument } from "../model/genre.model";
import TVShows, { TVShowsDocument } from "../model/TVShows.model";

export const searchMovies = async (req: Request, res: Response) => {
const query = req.query.q; // récupérer la requête de recherche de l'utilisateur

if (!query) {
    return res.status(400).json({ message: "The search query is required." });
}

let movies: MovieDocument[] = [];

// si l'utilisateur a fourni un genre, rechercher les films correspondants à ce genre
if (req.query.genre) {
    const genreName = req.query.genre;
    const genre: GenreDocument | null = await Genres.findOne({ name: genreName }).exec();

    if (!genre) {
        return res.status(404).json({ message: "Genre not found." });
      }
      
      movies = await Movies.find({ genre_ids: genre.id, title: { $regex: query, $options: "i" } }).exec();

    } else {
        // sinon, rechercher tous les films
        movies = await Movies.find({ title: { $regex: query, $options: "i" } }).exec();
        }
        
        if (movies.length === 0) {
        return res.status(404).json({ message: "No movies found." });
        }
        
        return res.status(200).json(movies);
};


export const searchTVShows = async (req: Request, res: Response) => {
    const query = req.query.q; 
    
    if (!query) {
        return res.status(400).json({ message: "The search query is required." });
    }
    
    let tvShows: TVShowsDocument [] = [];
    
    // si l'utilisateur a fourni un genre, rechercher les films correspondants à ce genre
    if (req.query.genre) {
        const genreName = req.query.genre;
        const genre: GenreDocument | null = await Genres.findOne({ name: genreName }).exec();
    
        if (!genre) {
            return res.status(404).json({ message: "Genre not found." });
          }
          
          tvShows = await TVShows.find({ genre_ids: genre.id, title: { $regex: query, $options: "i" } }).exec();
    
        } else {
            
            tvShows = await TVShows.find({ title: { $regex: query, $options: "i" } }).exec();
            }
            
            if (tvShows.length === 0) {
            return res.status(404).json({ message: "No tv shows found." });
            }
            
            return res.status(200).json(tvShows);
    };
    







