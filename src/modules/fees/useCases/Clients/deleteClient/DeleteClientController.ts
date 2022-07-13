import {Request, Response} from 'express';
import { container } from 'tsyringe';
import {DeleteClientsUseCase} from './DeleteClientUseCase';

export class DeleteClientsController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;

    const deleteClientsUseCase = container.resolve(DeleteClientsUseCase);

    await deleteClientsUseCase.execute({id});

    return response.status(201).send();
  }
}