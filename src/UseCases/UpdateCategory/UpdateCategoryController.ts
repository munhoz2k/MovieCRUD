import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import { UpdateCategoryRequest } from '../../interfaces/requests/UpdateCategoryRequest';
import { UpdateCategoryService } from './UpdateCategoryService';

export class UpdateCategoryController {
    async handle(req: Request, res: Response) {
        const { name, description }: UpdateCategoryRequest = req.body;
        const id: string = req.params.id;

        if (!name && !description) {
            return res.status(400).send('Name and description are both empty');
        }

        try {
            const service = new UpdateCategoryService();

            const category = await service.execute({ id, name, description });

            res.status(200).json(category);
        } catch (error) {
            if (error instanceof AppError) {
                res.status(error.status).json(error.message);
            } else {
                res.status(500).json(error.name);
            }
        }
    }
}
