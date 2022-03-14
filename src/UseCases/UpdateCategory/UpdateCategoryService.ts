import { getRepository } from 'typeorm';
import { Category } from '../../entities/Category';
import { AppError } from '../../errors/AppError';
import { UpdateCategoryRequest } from '../../interfaces/requests/UpdateCategoryRequest';

export class UpdateCategoryService {
    async execute({ id, name, description }: UpdateCategoryRequest) {
        const repo = getRepository(Category);

        const category = await repo.findOne(id);

        if (!category) {
            throw new AppError('Category does not exists!', 404);
        }

        category.name = name ? name : category.name;
        category.description = description ? description : category.description;

        await repo.save(category);

        return category;
    }
}
