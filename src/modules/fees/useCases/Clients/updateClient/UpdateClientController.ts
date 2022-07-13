import {Request, Response} from 'express';
import { container } from 'tsyringe';
import { UpdateClientsUseCase } from './UpdateClientUseCase';

export class UpdateClientsController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {name} = request.body;
    const {id} = request.params;
    

    const updateClientsUseCase = container.resolve(UpdateClientsUseCase)

    await updateClientsUseCase.execute({id,name});

    return response.status(201).send();
  }
}