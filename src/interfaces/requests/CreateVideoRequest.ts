import { Video } from '../../entities/Video';

export interface CreateVideoRequest {
    name: string;
    description: string;
    duration: number;
    category_id: string;
}
