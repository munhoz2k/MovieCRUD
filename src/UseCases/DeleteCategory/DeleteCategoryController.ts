import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import { DeleteCategoryService } from './DeleteCategoryService';

export class DeleteCategoryController {
    async handle(req: Request, res: Response) {
        const id = req.params.id;

        try {
            const service = new DeleteCategoryService();

            await service.execute(id);

            res.status(204).send('Deleted');
        } catch (error) {
            if (error instanceof AppError) {
                res.status(error.status).json(error.message);
            } else {
                res.status(500).json(error.name);
            }
        }
    }
}
