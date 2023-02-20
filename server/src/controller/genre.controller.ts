import GenreDocument from '../model/genre.model';
import { Request, Response } from 'express';

export async function getAllGenres(req: Request, res: Response) {
try {
const results = await GenreDocument.find();
res.json({ results });
} catch (error: any) {
res.status(500).send({ message: error.message });
}
};