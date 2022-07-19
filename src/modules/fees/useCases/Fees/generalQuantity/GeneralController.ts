import { Request, Response } from "express";
import { container } from "tsyringe";
import { GeneralQuantityUseCase } from "./GeneralUseCase";

export class GeneralQuantityController {
  
  async handle(request: Request,response: Response): Promise<Response> {
    const generalQuantityUseCase = container.resolve(GeneralQuantityUseCase);

    const all = await generalQuantityUseCase.execute();

    return response.json(all);
  }
}