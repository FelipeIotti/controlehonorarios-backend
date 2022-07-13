import {Request, Response} from 'express';
import { container } from 'tsyringe';
import { UpdateFeesUseCase } from './UpdateFeesUseCase';

export class UpdateFeesController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {clients,group_action,lawyers,opposing_party,status,payment_date,value,endDate} = request.body;
    const {id} = request.params;

    const updateFeesUseCase = container.resolve(UpdateFeesUseCase)

    await updateFeesUseCase.execute({id,clients,group_action,lawyers,opposing_party,status,payment_date,value,endDate});

    return response.status(201).send()
  }
}