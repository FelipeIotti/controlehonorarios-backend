import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateFeesUseCase } from "./CreateFeesUseCase";

export class CreateFeesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {clients,group_action,lawyers,opposing_party,status,payment_date,value,endDate} = request.body;

    const createFeesUseCase = container.resolve(CreateFeesUseCase);

    await createFeesUseCase.execute({clients,group_action,lawyers,opposing_party,status,payment_date,value,endDate});

    return response.status(201).send();
  }
}