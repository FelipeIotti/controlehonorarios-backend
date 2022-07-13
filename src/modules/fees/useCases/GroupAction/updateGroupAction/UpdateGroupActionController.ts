import {Request, Response} from 'express';
import { container } from 'tsyringe';
import { UpdateGroupActionUseCase } from './UpdateGroupActionUseCase';

export class UpdateGroupActionController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {name} = request.body;
    const {id} = request.params;

    const updateGroupActionUseCase = container.resolve(UpdateGroupActionUseCase)

    await updateGroupActionUseCase.execute({id,name});

    return response.status(201).send();
  }
}