import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListFeesUseCase } from "./ListFeesUseCase";


export class ListFeesController {
  
  async handle(request: Request,response: Response): Promise<Response> {
    const listFeesUseCase = container.resolve(ListFeesUseCase);

    const all = await listFeesUseCase.execute();

    return response.json(all);
  }
}