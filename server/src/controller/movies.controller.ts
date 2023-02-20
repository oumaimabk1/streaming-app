import MovieDocument from '../model/movie.model';
import { Request, Response } from 'express';

export async function getAllMovies(req: any, res: Response) {

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        
    try {
        const results = await MovieDocument.find()
            .skip((page - 1) * limit)
            .limit(limit);

        const totalItems =  results.length;

        res.json({
            results,
            pagination: {
                page,
                limit,
                totalItems,
                totalPages: Math.ceil(totalItems / limit),
            },
        });
    } catch (error: any) {
        res.sendStatus(500).send({ message: error.message });
    }
};
