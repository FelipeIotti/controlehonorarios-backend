import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListLawyersUseCase } from "./ListLawyersUseCase";


export class ListLawyersController {
  
  async handle(request: Request,response: Response): Promise<Response> {
    const listLawyersUseCase = container.resolve(ListLawyersUseCase);

    const all = await listLawyersUseCase.execute();

    return response.json(all);
  }
}