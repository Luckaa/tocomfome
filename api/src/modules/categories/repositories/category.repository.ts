import { Category } from '../models/category';
import CategoryModel from '../schemas/category.schema';
import { ICategoryRepository } from './category-repository.interface';

export class CategoryRepository implements ICategoryRepository {
    
    async create(user: Category): Promise<Category> {
        const documentCategoryCreated = await CategoryModel.create(user);
        const userCreated = documentCategoryCreated.toObject();
        return userCreated;
    }

    async findAll(): Promise<Category[]> {
        const documentCategoryFound = await CategoryModel.find({});
        const userFound = documentCategoryFound?.map(o => o.toObject());
        return userFound;
    }

}