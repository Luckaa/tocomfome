import { Result } from '../../../infra/models/result';

export interface IInfoHandler {
    handle(): Promise<Result>;
}