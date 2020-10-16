import { Result } from "../../../infra/models/result";
import { IBuscarRestaurantHandler } from "./buscar-restaurant-handler.interface";

export class BuscarRestaurantHandler implements IBuscarRestaurantHandler {
  async handle(): Promise<Result> {
    const restaurants = { restaurantes: ["cleytão", "minimous"] };
    const messageReturn = "success";
    return new Result(restaurants, messageReturn, true, []);
  }
}
