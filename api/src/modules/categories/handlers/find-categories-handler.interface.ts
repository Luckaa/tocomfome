import { Result } from '../../../infra/models/result';

export interface IFindCategoriesHandler {
    handle(): Promise<Result>;
}