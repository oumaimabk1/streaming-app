/*import MovieDocument from '../model/movie.model';
import paginate from 'mongoose-paginate-v2';
import { Request, Response } from 'express';

export async function getAllMovies(req: Request, res: Response) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    try {
        const results = await MovieDocument.paginate({}, { page, limit });
        res.json(results);
    } catch (error: any) {
        res.sendStatus(500).send({ message: error.message });
    }
};
*/