import { getRepository } from 'typeorm';
import { Category } from '../../entities/Category';
import { Video } from '../../entities/Video';
import { AppError } from '../../errors/AppError';
import { CreateVideoRequest } from '../../interfaces/requests/CreateVideoRequest';

export class CreateVideoService {
    async execute({ name, description, duration, category_id }: CreateVideoRequest): Promise<Video | AppError> {
        const repo = getRepository(Video);
        const repoCategory = getRepository(Category);

        if (!(await repoCategory.findOne(category_id))) {
            throw new AppError('Category does not exists!', 404);
        }

        const video = repo.create({
            name,
            description,
            duration,
            category_id,
        });

        await repo.save(video);

        return video;
    }
}
