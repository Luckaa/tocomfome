
import { Result } from '../types/api.types';
import { LoginDto } from '../types/user.types';
import api from './api';

export function signIn(loginDto: LoginDto): Promise<Result> {
  return api.post('/login', loginDto).then((result) => result.data);
}
