import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateFeesUseCase } from "./CreateFeesUseCase";

export class CreateFeesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {clients,group_action,lawyers1,lawyers2,lawyers3,lawyers4,opposing_party,status,payment_date,value1,value2,value3,value4,endDate} = request.body;
    
    const createFeesUseCase = container.resolve(CreateFeesUseCase);

    await createFeesUseCase.execute({clients,group_action,lawyers1,lawyers2,lawyers3,lawyers4,opposing_party,status,payment_date,value1,value2,value3,value4,endDate});

    return response.status(201).send();
  }
}