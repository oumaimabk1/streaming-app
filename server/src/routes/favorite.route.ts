import express from "express";
import {
    addFavorite,
    getFavoritesByUser,
    removeFavorite,
} from "../controller/favorite.controller";

const router = express.Router();

router.post("/", addFavorite);
router.get("/:userId", getFavoritesByUser);
router.delete("/", removeFavorite);

export default router;
