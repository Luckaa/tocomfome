import { Result } from '../../../infra/models/result';
import { RegisterClientDto } from '../dtos/register-client.dto';

export interface IRegisterClientHandler {
    handle(RegisterClientDto: RegisterClientDto): Promise<Result>;
}