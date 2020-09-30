import { Result } from '../../../infra/models/result';

export interface IBuscarRestaurantHandler {
    handle(): Promise<Result>;
}