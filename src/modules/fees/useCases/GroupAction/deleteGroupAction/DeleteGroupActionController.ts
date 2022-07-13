import {Request, Response} from 'express';
import { container } from 'tsyringe';
import {DeleteGroupActionUseCase} from './DeleteGroupActionUseCase';

export class DeleteGroupActionController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;

    const deleteGroupActionUseCase = container.resolve(DeleteGroupActionUseCase);

    await deleteGroupActionUseCase.execute({id});

    return response.status(201).send();
  }
}