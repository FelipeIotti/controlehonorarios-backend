import {Request, Response} from 'express';
import { container } from 'tsyringe';
import { UpdateFeesUseCase } from './UpdateFeesUseCase';

export class UpdateFeesController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {clients,group_action,lawyers1,lawyers2,lawyers3,lawyers4,opposing_party,status,payment_date,value1,value2,value3,value4,endDate} = request.body;
    const {id} = request.params;

    const updateFeesUseCase = container.resolve(UpdateFeesUseCase)

    await updateFeesUseCase.execute({id,clients,group_action,lawyers1,lawyers2,lawyers3,lawyers4,opposing_party,status,payment_date,value1,value2,value3,value4,endDate});

    return response.status(201).send();
  }
}