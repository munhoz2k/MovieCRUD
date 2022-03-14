import { Router } from 'express';
import { CreateCategoryController } from './UseCases/CreateCategory/CreateCategoryController';
import { DeleteCategoryController } from './UseCases/DeleteCategory/DeleteCategoryController';
import { GetAllCategoriesController } from './UseCases/GetAllCategories/GetAllCategoriesController';
import { UpdateCategoryController } from './UseCases/UpdateCategory/UpdateCategoryController';

const routes = Router();

routes.get('/categories', new GetAllCategoriesController().handle);
routes.post('/categories', new CreateCategoryController().handle);
routes.put('/categories/:id', new UpdateCategoryController().handle);
routes.delete('/categories/:id', new DeleteCategoryController().handle);

export { routes };
