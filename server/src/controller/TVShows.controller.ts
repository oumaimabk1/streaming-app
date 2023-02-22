import TVShowsDocument from '../model/TVShows.model';
import { Request, Response } from 'express';

export async function getAllTVShows(req: any, res: Response) {

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        
    try {
        const results = await TVShowsDocument.find()
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


export async function getOneTVShow(req: any, res: Response) {
    console.log(req.params)
    try {
        const id = req.params.id
        const result = await TVShowsDocument.findOne({ id });
        console.log(result)
        res.json({ result });
    } catch (error: any) {
        res.sendStatus(500).send({ message: error.message });
    }
};