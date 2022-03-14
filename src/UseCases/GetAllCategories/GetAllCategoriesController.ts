import { Request, Response } from 'express';
import { GetAllCategoriesService } from './GetAllCategoriesService';

export class GetAllCategoriesController {
    async handle(req: Request, res: Response) {
        try {
            const service = new GetAllCategoriesService();

            const categories = await service.execute();

            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json(error.name);
        }
    }
}
