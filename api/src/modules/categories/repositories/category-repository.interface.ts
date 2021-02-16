import { Category } from '../models/category';

export interface ICategoryRepository {
    create(user: Category): Promise<Category>;
    findAll(): Promise<Category[]>;
}