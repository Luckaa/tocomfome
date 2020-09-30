import { Result } from "../../../infra/models/result";
import { IInfoHandler } from "./info-handler.interface";
import { Info } from "../models/info";

export class InfoHandler implements IInfoHandler {
  async handle(): Promise<Result> {
    const infoApi: Info = { name: "tocomfome-api", version: "1.0 BETA" };
    const messageReturn = "success in bringing as api information";
    return new Result(infoApi, messageReturn, true, []);
  }
}
