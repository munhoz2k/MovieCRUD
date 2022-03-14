import { getRepository } from 'typeorm';
import { Category } from '../../entities/Category';
import { AppError } from '../../errors/AppError';
import { CreateCategoryRequest } from '../../interfaces/requests/CreateCategoryRequest';

export class CreateCategoryService {
    async execute({ name, description }: CreateCategoryRequest): Promise<Category | Error> {
        const repo = getRepository(Category);

        if (await repo.findOne({ name })) {
            throw new AppError('Category already exists', 400);
        }

        const category = repo.create({
            name,
            description,
        });

        await repo.save(category);

        return category;
    }
}
