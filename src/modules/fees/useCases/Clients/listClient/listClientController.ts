import { Request, Response } from "express";
import { container } from "tsyringe";
//import { ListGroupActionUseCase } from "./ListGroupActionUseCase";
import { ListClientsUseCase } from "../listClient/listClientUseCase";


export class ListClientsController {
  
  async handle(request: Request,response: Response): Promise<Response> {
    const listClientsUseCase = container.resolve(ListClientsUseCase);

    const all = await listClientsUseCase.execute();

    return response.json(all);
  }
}