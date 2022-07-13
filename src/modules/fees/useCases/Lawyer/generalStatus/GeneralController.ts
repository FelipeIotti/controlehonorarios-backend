import { Request, Response } from "express";
import { container } from "tsyringe";
import { GeneralStatusUseCase } from "./GeneralUseCase";

export class GeneralStatusController {
  
  async handle(request: Request,response: Response): Promise<Response> {
    const generalUseCase = container.resolve(GeneralStatusUseCase);

    const all = await generalUseCase.execute();

    return response.json(all);
  }
}