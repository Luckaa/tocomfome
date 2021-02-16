import { Result } from '../types/api.types';
import api from './api';


class CategoryService {
    async findCategories(): Promise<Result> {
        const response = await api.get('/categories');
        return response.data;
    }
}
export default new CategoryService();