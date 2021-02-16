import { Result } from "../../../infra/models/result";
import { UserType } from '../../users/enums/user-type.enum';
import { UserRepository } from '../../users/repositories/user.repository';
import { IUserRepository } from '../../users/repositories/user.repository.interface';
import { IBuscarRestaurantHandler } from "./buscar-restaurant-handler.interface";

export class BuscarRestaurantHandler implements IBuscarRestaurantHandler {

  private _repository: IUserRepository;

  constructor() {
    this._repository = new UserRepository();
  }

  async handle(): Promise<Result> {
    const restaurants = await this._repository.findByType(UserType.RESTAURANT);
    const messageReturn = "success on list restaurants";
    return new Result(restaurants, messageReturn, true, []);
  }
}
