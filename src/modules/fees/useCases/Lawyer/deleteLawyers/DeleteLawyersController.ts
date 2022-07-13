import {Request, Response} from 'express';
import { container } from 'tsyringe';
import {DeleteLawyersUseCase} from './DeleteLawyersUseCase';

export class DeleteLawyersController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;

    const deleteLawyersUseCase = container.resolve(DeleteLawyersUseCase);

    await deleteLawyersUseCase.execute({id});

    return response.status(201).send();
  }
}