import { Result } from '../types/api.types';
import api from './api';


class RestauranteService {
    async findRestaurants(): Promise<Result> {
        const response = await api.get('/restaurants');
        return response.data;
    }
}
export default new RestauranteService();