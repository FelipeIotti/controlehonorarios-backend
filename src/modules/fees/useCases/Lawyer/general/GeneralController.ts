import { Request, Response } from "express";
import { container } from "tsyringe";
import { GeneralUseCase } from "./GeneralUseCase";

export class GeneralController {
  
  async handle(request: Request,response: Response): Promise<Response> {
    const generalUseCase = container.resolve(GeneralUseCase);

    const all = await generalUseCase.execute();

    return response.json(all);
  }
}