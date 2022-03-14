import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import { CreateVideoService } from './CreateVideoService';

export class CreatevideoController {
    async handle(req: Request, res: Response) {
        try {
            const service = new CreateVideoService();
        } catch (error) {
            if (error instanceof AppError) {
                res.status(error.status).json(error.message);
            } else {
                res.status(500).json(error.name);
            }
        }
    }
}
