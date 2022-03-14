import { getRepository } from 'typeorm';
import { Category } from '../../entities/Category';
import { AppError } from '../../errors/AppError';

export class DeleteCategoryService {
    async execute(id: string): Promise<void | Error> {
        const repo = getRepository(Category);

        if (!(await repo.findOne(id))) {
            throw new AppError('Category does not exists!', 404);
        }

        await repo.delete(id);
    }
}
