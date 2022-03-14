import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import { CreateCategoryRequest } from '../../interfaces/requests/CreateCategoryRequest';
import { CreateCategoryService } from './CreateCategoryService';

export class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const { name, description }: CreateCategoryRequest = req.body;

        try {
            if (!name || !description) {
                return res.status(400).send('Empty name or description');
            }

            const service = new CreateCategoryService();
            const result = await service.execute({ name, description });

            res.status(201).json(result);
        } catch (error) {
            if (error instanceof AppError) {
                res.status(error.status).json(error.message);
            } else {
                res.status(500).json(error.name);
            }
        }
    }
}
