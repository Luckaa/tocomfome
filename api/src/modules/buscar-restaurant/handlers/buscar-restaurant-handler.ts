import { Result } from "../../../infra/models/result";
import { IBuscarRestaurantHandler } from "./buscar-restaurant-handler.interface";
import { Restaurants } from "../models/restaurants";

export class BuscarRestaurantHandler implements IBuscarRestaurantHandler {
  async handle(): Promise<Result> {
    const restaurantes: Restaurants = {  restaurantes: "cleytão, minimous" };
    const messageReturn = "success";
    return new Result(restaurantes, messageReturn, true, []); 
  }
}
