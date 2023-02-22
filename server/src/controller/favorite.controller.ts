import { Request, Response } from "express";
import Favorite, { FavoriteDocument } from "../model/favorite.model";

export async function addFavorite(req: Request, res: Response) {
    try {
        const { user, movie } = req.body;

        // Vérifie si l'utilisateur a déjà ajouté ce film à ses favoris
        const existingFavorite = await Favorite.findOne({ user, movie });

        if (existingFavorite) {
            return res.status(409).json({
                message: "This movie is already in your favorites",
            });
        }

        // Crée un nouveau document Favorite
        const newFavorite: FavoriteDocument = new Favorite({
            user,
            movie,
        });

        // Enregistre le nouveau document en base de données
        await newFavorite.save();

        res.status(201).json({
            message: "The movie has been added to your favorites",
        });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export async function getFavoritesByUser(req: Request, res: Response) {
    try {
        const { userId } = req.params;

        // Récupère les favoris de l'utilisateur spécifié
        const favorites = await Favorite.find({ user: userId }).populate(
            "movie"
        );

        res.json(favorites);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export async function removeFavorite(req: Request, res: Response) {
    try {
        const { user, movie } = req.body;

        // Supprime le document Favorite correspondant
        await Favorite.findOneAndDelete({ user, movie });

        res.json({
            message: "The movie has been removed from the user's favorites",
        });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}
