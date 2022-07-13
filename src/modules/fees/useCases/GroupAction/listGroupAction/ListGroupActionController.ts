import { Request, Response } from "express";
import { container } from "tsyringe";
//import { ListGroupActionUseCase } from "./ListGroupActionUseCase";
import { ListGroupActionUseCase } from "../listGroupAction/ListGroupActionUseCase";


export class ListGroupActionController {
  
  async handle(request: Request,response: Response): Promise<Response> {
    const listGroupActionUseCase = container.resolve(ListGroupActionUseCase);

    const all = await listGroupActionUseCase.execute();

    return response.json(all);
  }
}